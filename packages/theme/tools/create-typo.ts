import {writeFile} from 'fs/promises';
import {join} from 'path';
import {
  createTextTypeStyles,
  TextNames,
  TextStyle,
  TextTypeStyles,
} from '../src/typo';
import {indentLine, maybeConvertToRem} from './utils';

export default async function outputTypography() {
  const base = join(__dirname, '../src');
  const cssModule = join(base, 'typography.module.css');
  const regular = join(base, 'typography.css');

  const css = generateCss();

  return Promise.all([writeFile(cssModule, css), writeFile(regular, css)]);
}

function generateCss() {
  const typo = createTextTypeStyles();

  return `
/* Base Typgraphy Custom Properties */
:root {
${printTextStyleCustomProps(typo)}
}

/* Typography definitions */
${printTextStyleClasses(typo)}
`;
}

type ValidStyleProps = keyof TextStyle;
const generateCustomPropertyName = (
  textName: TextNames,
  styleProp: ValidStyleProps,
) => `--baseTypo-${textName}-${styleProp}`;

function valueCssConverter(_: ValidStyleProps, value: string | number) {
  return maybeConvertToRem(value);
}

const customPropertyVariable = (
  textName: TextNames,
  styleProp: ValidStyleProps,
  value: string | number,
) =>
  `var(${generateCustomPropertyName(textName, styleProp)}, ${valueCssConverter(
    styleProp,
    value,
  )})`;

const declareCustomProperty = (
  textName: TextNames,
  styleProp: ValidStyleProps,
  value: string | number,
) =>
  `${generateCustomPropertyName(textName, styleProp)}: ${valueCssConverter(
    styleProp,
    value,
  )};`;
const useCustomPropertyOnCssProperty = (
  textName: TextNames,
  styleProp: ValidStyleProps,
  value: string | number,
) =>
  `${textStyleMapper(styleProp)}: ${customPropertyVariable(
    textName,
    styleProp,
    value,
  )};`;
function textStyleMapper(styleProp: ValidStyleProps) {
  switch (styleProp) {
    case 'fontSize':
      return 'font-size';
    case 'fontWeight':
      return 'font-weight';
    case 'lineHeight':
      return 'line-height';
    case 'letterSpacing':
      return 'letter-spacing';
    case 'textDecorationLine':
      return 'text-decoration';
  }
}
function printTextStyleClasses(obj: TextTypeStyles) {
  let data: string[] = [];
  for (let [name, typeStyle] of Object.entries(obj)) {
    const properties = createCssProperties(name as TextNames, typeStyle);

    data.push(`.typo-${name} {
${properties}
}`);
  }

  return data.join('\n');
}
function createCssProperties(name: TextNames, typeStyle: TextStyle): string {
  return Object.keys(typeStyle)
    .reduce<string[]>((acc, key) => {
      const key_ = key as ValidStyleProps;
      const val = typeStyle[key_];
      if (!val) return acc;

      const line = useCustomPropertyOnCssProperty(name, key_, val);
      return acc.concat(line);
    }, [])
    .map(indentLine)
    .join('\n');
}

function printTextStyleCustomProps(obj: TextTypeStyles) {
  let data: string[] = [];
  for (let [name, typeStyle] of Object.entries(obj)) {
    data.push(indentLine(`/* Definitions for ${name} */`));

    for (let [cssProperty, val] of Object.entries(typeStyle)) {
      const cssProperty_ = cssProperty as ValidStyleProps;
      if (!val) continue;

      const line = declareCustomProperty(name as TextNames, cssProperty_, val);
      data.push(indentLine(line));
    }
    data.push('');
  }
  return data.join('\n');
}
