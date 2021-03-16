import {writeFile} from 'fs/promises';
import {join} from 'path';
import {createTextTypeStyles, TextStyle, TextTypeStyles} from '../src/typo';
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
:root {

/* Base Typgraphy Custom Properties */
${printTextStyleCustomProps(typo)}
}

/* Typography definitions */
${printTextStyleClasses(typo)}
`;
}

type ValidStyleProps = keyof TextStyle;
function textStyleMapper(obj: ValidStyleProps) {
  switch (obj) {
    case 'fontSize':
      return 'font-size';
    case 'fontWeight':
      return 'font-weight';
    case 'lineHeight':
      return 'line-height';
  }
}
function printTextStyleClasses(obj: TextTypeStyles) {
  let data: string[] = [];
  for (let [name, typeStyle] of Object.entries(obj)) {
    const properties = Object.keys(typeStyle)
      .reduce<string[]>((acc, key) => {
        const key_ = key as ValidStyleProps;
        const val = typeStyle[key_];
        if (!val) return acc;
        const line = `${textStyleMapper(key_)}: ${maybeConvertToRem(val)};`;
        return acc.concat(indentLine(line));
      }, [])
      .join('\n');

    data.push(`.typo-${name} {
${properties}
}`);
  }

  return data.join('\n');
}
function printTextStyleCustomProps(obj: TextTypeStyles) {
  let data: string[] = [];
  for (let [name, typeStyle] of Object.entries(obj)) {
    const properties = Object.keys(typeStyle)
      .reduce<string[]>((acc, key) => {
        const key_ = key as ValidStyleProps;
        const val = typeStyle[key_];
        if (!val) return acc;
        const line = `--baseTypo-${name}-${key}: ${maybeConvertToRem(val)};`;
        return acc.concat(indentLine(line));
      }, [])
      .join('\n');

    data = data.concat(properties);
  }

  return data.join('\n\n');
}
