import {writeFile} from 'fs/promises';
import {join} from 'path';
import {ContrastColor, Mode, Theme, themes} from '../src';
import {colors} from '../src/colors';
import {indentJoin, maybeConvertToRem} from './utils';

export default async function outputThemes() {
  const base = join(__dirname, '../src');
  const cssModule = join(base, 'theme.module.css');
  const regular = join(base, 'theme.css');

  const css = generateCss();

  return Promise.all([writeFile(cssModule, css), writeFile(regular, css)]);
}

function generateCss() {
  const colorStrings = indentJoin(printWithPrefix('baseColor', colors));

  return `
:root {

/* Base color data */
${colorStrings}

}

/* Light theme data */
${theme('light')}

/* Dark theme data */
${theme('dark')}

/* Theme color pairs */
${printContrastColors(themes.light.colors)}
`;
}

function theme(themeName: Mode) {
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

function printContrastColors(obj: {[key: string]: ContrastColor}) {
  let data: string[] = [];
  for (let name in obj) {
    data.push(`.colors-${name} {
  background-color: var(--colors-${name}-backgroundColor);
  color: var(--colors-${name}-color);
}`);
  }
  return data.join('\n');
}

function isContrastColor(a: any): a is ContrastColor {
  return typeof a === 'object' && 'backgroundColor' in a && 'color' in a;
}
