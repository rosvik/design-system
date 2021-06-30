import { Themes } from './../src/theme';
import {writeFile} from 'fs/promises';
import {join} from 'path';
import {ContrastColor, Mode, Theme, } from '../src';
import {indentJoin, maybeConvertToRem} from './utils';



export default async function outputThemes(themeOutputDirName:string, themes:Themes, colors:any) {

  const base = join(__dirname,`../src/themes/${themeOutputDirName}`)


  const cssModule = join(base, 'theme.module.css');
  const regular = join(base, 'theme.css');

  const css = generateCss(themes,colors);

  return Promise.all([writeFile(cssModule, css), writeFile(regular, css)]);

}

function generateCss(themes:Themes, colors:any) {
  const colorStrings = indentJoin(printWithPrefix('baseColor', colors));

  return `
:root {

/* Base color data */
${colorStrings}

}

/* Light theme data */
${theme(themes,'light')}

/* Dark theme data */
${theme(themes,'dark')}

${darkTheme(themes)}

/* Theme color pairs */
${printContrastColors('colors', themes.light.colors)}

${printContrastColors('status', themes.light.status)}
`;
}

function theme(themes:Themes, themeName: Mode) {
  const extract = (name: keyof Theme) =>
    indentJoin(
      printWithPrefix(name, themes[themeName][name], maybeConvertToRem),
    );

  return `.${themeName} {
${extract('border')}

${extract('spacings')}

${extract('icon')}

${extract('text')}

${extract('colors')}

${extract('status')}
}
`;
}

function darkTheme(themes:Themes) {
  const extract = (name: keyof Theme) =>
    indentJoin(printWithPrefix(name, themes.dark[name], maybeConvertToRem));

  return `@media (prefers-color-scheme: dark) {
  .light:not(.override-light) {
${extract('border')}

${extract('spacings')}

${extract('icon')}

${extract('text')}

${extract('colors')}

${extract('status')}
  }
}
`;
}

type Converter = (v: any) => any;
function printWithPrefix<T>(
  prefix: string,
  obj: T,
  valueConvert: Converter = (i) => i,
) {
  let data: string[] = [];
  for (let [name, colorValue] of Object.entries(obj)) {
    if (isContrastColor(colorValue)) {
      const {textColorType: _, ...withoutText} = colorValue;
      data = data.concat(
        printWithPrefix(`${prefix}-${name}`, withoutText, valueConvert),
      );
    } else if (typeof colorValue === 'object') {
      data = data.concat(
        printWithPrefix(`${prefix}-${name}`, colorValue, valueConvert),
      );
    } else {
      data.push(`--${prefix}-${name}: ${valueConvert(colorValue)};`);
    }
  }
  return data;
}

type ObjColors = {[key: string]: ContrastColor | ObjColors};

function printContrastColors(
  name: string,
  obj: ObjColors,
  prefix: string = '',
) {
  let data: string[] = [];
  for (let key in obj) {
    const val = obj[key];
    if (isContrastColor(val)) {
      data.push(`.${name}${prefix}-${key} {
  background-color: var(--${name}${prefix}-${key}-backgroundColor);
  color: var(--${name}${prefix}-${key}-color);
}`);
    } else {
      data = data.concat(printContrastColors(name, val, `-${key}`));
    }
  }
  return data.join('\n');
}

function isContrastColor(a: any): a is ContrastColor {
  return typeof a === 'object' && 'backgroundColor' in a && 'color' in a;
}
