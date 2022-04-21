import {Themes} from './../src/theme';
import {writeFile} from 'fs/promises';
import {join} from 'path';
import {ContrastColor, Mode, Theme, InteractiveColor} from '../src';
import {indentJoin, maybeConvertToRem} from './utils';

export default async function outputThemes(
  themeOutputDirName: string,
  themes: Themes,
) {
  const base = join(__dirname, `../src/themes/${themeOutputDirName}`);

  const cssModule = join(base, 'theme.module.css');
  const regular = join(base, 'theme.css');

  const css = generateCss(themes);

  return Promise.all([writeFile(cssModule, css), writeFile(regular, css)]);
}

function generateCss(themes: Themes) {
  return `

/* Light theme data */
${theme(themes, 'light')}

/* Dark theme data */
${theme(themes, 'dark')}

${darkTheme(themes)}

/* Theme color pairs */
${printContrastColors('static', themes.light.static)}

${printInteractiveColors('interactive', themes.light.interactive)}
`;
}

function theme(themes: Themes, themeName: Mode) {
  const extract = (name: keyof Theme) =>
    indentJoin(
      printWithPrefix(name, themes[themeName][name], maybeConvertToRem),
    );

  return `.${themeName} {
${extract('border')}

${extract('spacings')}

${extract('icon')}

${extract('text')}

${extract('static')}

${extract('interactive')}
}
`;
}

function darkTheme(themes: Themes) {
  const extract = (name: keyof Theme) =>
    indentJoin(printWithPrefix(name, themes.dark[name], maybeConvertToRem));

  return `@media (prefers-color-scheme: dark) {
  .light:not(.override-light) {
${extract('border')}

${extract('spacings')}

${extract('icon')}

${extract('text')}

${extract('static')}

${extract('interactive')}
}
}
`;
}

type Converter = (v: any, name: string) => any;
function printWithPrefix<T>(
  prefix: string,
  obj: T,
  valueConvert: Converter = (i) => i,
) {
  let data: string[] = [];
  for (let [name, colorValue] of Object.entries(obj)) {
    if (isContrastColor(colorValue)) {
      const {...withoutText} = colorValue;
      data = data.concat(
        printWithPrefix(`${prefix}-${name}`, withoutText, valueConvert),
      );
    } else if (typeof colorValue === 'object') {
      data = data.concat(
        printWithPrefix(`${prefix}-${name}`, colorValue, valueConvert),
      );
    } else {
      data.push(`--${prefix}-${name}: ${valueConvert(colorValue, name)};`);
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
    let selector = `-${key}`;
    if (['hover', 'active', 'disabled'].includes(key)) {
      selector = `:${key}`;
    }
    if (['default'].includes(key)) {
      selector = '';
    }
    if (['outline'].includes(key)) break;
    if (isContrastColor(val)) {
      data.push(`.${name}${prefix}${selector} {
  background-color: var(--${name}${prefix}-${key}-background);
  color: var(--${name}${prefix}-${key}-text);
}`);
    } else {
      data = data.concat(printContrastColors(name, val, `-${key}`));
    }
  }
  return data.join('\n');
}

function printInteractiveColors(
  name: string,
  obj: ObjColors,
  prefix: string = '',
) {
  let data: string[] = [];
  for (let key in obj) {
    const val = obj[key];
    if (isInteractive(val)) {
      return printContrastColors(name, obj, prefix);
    }
  }
  return data.join('\n');
}

function isContrastColor(a: any): a is ContrastColor {
  return typeof a === 'object' && 'background' in a && 'text' in a;
}

function isInteractive(a: any): a is InteractiveColor {
  return (
    typeof a === 'object' &&
    'default' in a &&
    'hover' in a &&
    'active' in a &&
    'disabled' in a &&
    'outline' in a
  );
}
