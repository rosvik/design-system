import { Options, useFigmaToDTCG } from "@tfk-samf/figma-to-dtcg"
import type { GetLocalVariablesResponse } from "@figma/rest-api-spec"

// @ts-ignore Package exists, but is not found by TS
import StyleDictionary from 'style-dictionary';
// @ts-ignore Package exists, but is not found by TS
import { fileHeader } from 'style-dictionary/utils';
import type { Config, DesignTokens, TransformedToken, File, Dictionary } from 'style-dictionary/types';

import path from 'path';
import { convertToCamelCase } from "./utils";

export type OrganizationId = 'atb' | 'fram' | 'innlandet' | 'nfk' | 'troms' | 'vkt' | 'farte'
export interface Organization {
  id: OrganizationId
  name: string
}
export type Modes = 'light' | 'dark'
export type SharedCollections = 'border' | 'spacing' | 'typography' | 'icon'
export type OrganisationCollections = 'color_palette'
export type VariantCollections = 'theme'
export type Collections = SharedCollections | OrganisationCollections | VariantCollections
const tokenTypeMap: Options<Collections>['typeMap'] = {
  BOOLEAN: () => "boolean",
  COLOR: () => "color",
  STRING: () => "fontFamily",
  FLOAT: (collection) => {
    switch (collection) {
      case "spacing":
      case "border":
      case "icon":
        return "dimension"
      default:
        return "number"
    }
  }
}

type FormatOptions = {
  file: File,
  options?: {
    content?: string
  },
  dictionary?: Dictionary
}

const outDir = './src/generated/';
const organizations: Organization[] = [
  {id: 'atb', name: 'AtB'},
  {id: 'troms', name: 'Troms'},
  {id: 'fram', name: 'FRAM'},
  {id: 'innlandet', name: 'Innlandet'},
  {id: 'nfk', name: 'Nfk'},
  {id: 'vkt', name: 'VKT'},
  {id: 'farte', name: 'Farte'}
]
const modes: Modes[] = ['light', 'dark'];

/**
 * Prepends collection name to file path of the token
 * and converts it to camelCase.
 */
StyleDictionary.registerTransform({
  name: 'attribute/append-type',
  type: 'attribute',
  transform: (token: TransformedToken) => {
    const originalPath = token.path;

    if (!token.prefix) return token;

    Object.assign(originalPath, [token.prefix, ...token.path].map(convertToCamelCase));

    return token;
  },
});

/**
 * Removes the base colors (color palette) from the final output.
 */
StyleDictionary.registerFilter({
  name: 'filter-palette',
  filter: (token: TransformedToken) => {
    return token.prefix !== "color_palette"
  }
});

const mainIndex = () => {
  return organizations.map(organization => (
    `export {default as ${organization.name}Themes} from './${organization.id}-theme/theme';`
    ))
    .join("\n")
}

/**
 * Contents of the main TypeScript file linking the themes
 */
const tsIndex = `
import light from "./light"
import dark from "./dark"

const themes = {
  light,
  dark
}
  
export default themes`;

/**
 * Contents of the main CSS file linking the themes
 */
const cssIndex = `/* Import dark mode */
@import url('dark.css');
/* Import light mode */
@import url('light.css');
/* Override light mode if the user prefers the dark color scheme */
@import url('dark.css') (prefers-color-scheme: dark);
`;

/**
 * Outputs a string to a file. Used for generated
 * linking files defined above.
 */
StyleDictionary.registerFormat({
  name: 'index',
  format: async ({ file, options }: FormatOptions) => {
    const header = await fileHeader({ file });
    return (
      header
      + options?.content
    );
  },
});

/**
 * Generates a nested JSON object using the path of each token as key.
 *
 * ["Color", "Background", "Neutral", "0"] becomes
 * {
 *   "Color": {
 *     "Background": {
 *       "Neutral": {
 *         "0": value
 *       }
 *     }
 *   }
 * }
 *
 * @param tokens Flat list of design tokens
 * @returns Nested object based on the path of each token
 */
const expandToNestedObject = (tokens: TransformedToken[], pathKey = 'path') => {
  const result: any = {};
  tokens.forEach((token) => {
    let current = result;
    token[pathKey].forEach((element: string, index: number) => {
      if (typeof current === 'string') {
        console.warn(`Converted ContrastColor to old format for ${token[pathKey].join('.')}`)
        return
      }

      if (index === token[pathKey].length - 1) {
        current[element] = token.value;
      }
      else {
        current[element] = current[element] || {};
        current = current[element];
      }
    });
  });
  return result;
};

/**
 * Generates the nested JSON object and unquotes its keys.
 */
StyleDictionary.registerFormat({
  name: 'typescript/obj',
  format: async ({ dictionary, file }: FormatOptions) => (`${await fileHeader({ file })
    }export default ${JSON.stringify(expandToNestedObject(dictionary!.allTokens, 'path'), null, 2).replace(/"([^"]+)":/g, '$1:')
    };\n`),
});

/**
 * Configures where the file should be output in accordance with the organization.
 *
 * @param organization Name of the organization
 * @returns Output folder
 */
const makeDestination = (organization: Organization): string => path.join(outDir, `themes/${organization.id}-theme/`);

const generateThemes = async () => {

  const response = await fetch(`${process.env.FIGMA_VARIABLES_URL}`, {
    headers: {
      'X-FIGMA-TOKEN': process.env.FIGMA_REST_API_KEY ?? "FIGMA_REST_API_KEY inaccessible or not set."
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to retrieve Figma variables with status ${response.status}: ${(await response.json())?.message}`)
  }

  /**
   * Convert Figma response to Design Tokens Community Group (DTCG) standard
   */
  const { tokens } = await useFigmaToDTCG<
    OrganizationId,
    Modes,
    SharedCollections,
    OrganisationCollections,
    VariantCollections
  >({
    api: "rest",
    response: await response.json() as GetLocalVariablesResponse
  }, {
    verbosity: "silent",
    typeMap: tokenTypeMap
  })

  const makeTokens = (organization: Organization, mode: Modes) => {
    const { theme, color_palette, ...rest } = {
      ...tokens,
      theme: tokens['theme']?.[`${organization.id}_${mode}`],
      color_palette: tokens['color_palette']?.[organization.id]
    }

    return {
      ...theme,
      ...color_palette,
      ...rest.border,
      ...rest.typography,
      ...rest.spacing,
      ...rest.icon
    } as DesignTokens
  }

  /**
   * @param organization Name of the organization
   * @param mode Theme mode
   * @returns Style Dictionary config for the org-mode combination
   */
  const getStyleDictionaryConfig = (organization: Organization, mode: Modes): Config => {

    return {
      log: {
        verbosity: 'silent',
      },
      tokens: makeTokens(organization, mode),
      platforms: {
        css: {
          buildPath: makeDestination(organization),
          expand: true,
          // `css` transformGroup with `attribbute/append-type` prepended
          transforms: ['attribute/append-type', 'attribute/cti', 'name/kebab', 'time/seconds', 'html/icon', 'size/pxToRem', 'color/css', 'asset/url', 'fontFamily/css', 'cubicBezier/css', 'strokeStyle/css/shorthand', 'border/css/shorthand', 'typography/css/shorthand', 'transition/css/shorthand', 'shadow/css/shorthand'],
          files: [
            {
              format: 'css/variables',
              options: {
                selector: `[data-theme="${mode}"], [data-theme="auto"] { color-scheme: ${mode}; } \n[data-theme="${mode}"], [data-theme="auto"]`,
              },
              destination: `${mode}.css`,
              filter: 'filter-palette',
            },
            {
              format: 'index',
              options: {
                content: cssIndex,
              },
              destination: 'theme.css',
            },
          ],
        },
        ts: {
          buildPath: makeDestination(organization),
          expand: true,
          // `js` transformGroup with `attribbute/append-type` prepended
          transforms: ['attribute/append-type', 'attribute/cti', 'name/pascal', 'color/hex'],
          files: [
            {
              format: 'typescript/obj',
              destination: `${mode}.ts`,
              filter: 'filter-palette',
            },
            {
              format: 'index',
              options: {
                content: tsIndex,
              },
              destination: 'theme.ts',
            },
            {
              format: 'index',
              options: {
                content: mainIndex(),
              },
              destination: '../index.ts',
            },
          ],
        },
      },
    };
  };

  // Generate files for each organization-mode combination
  for (const organization of organizations) {
    console.info(`\n👷  Built ${organization.name} tokens      | 🌙 & 🌞 |`);
    await Promise.all(
      modes.map((mode) => new StyleDictionary(
        getStyleDictionaryConfig(organization, mode),
      ).buildAllPlatforms()),
    );
  }
}

generateThemes()

console.log('\n');
