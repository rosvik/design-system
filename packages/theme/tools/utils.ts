export function indentLine(list: string) {
  return Array.from({length: 3}).join(' ') + list;
}

export function indentJoin(list: string[]) {
  return list.map(indentLine).join('\n');
}

export function isHex(maybeHex: string) {
  return maybeHex.match(/\b[a-fA-F0-9]+\b/);
}

export function maybeConvertToRem(val: any, name?: string) {
  if (typeof val !== 'number' || name === 'opacity') {
    return isHex(val) ? (val as string).toUpperCase() : val
  }

  // Using 16 as base size
  return `${val / 16}rem`;
}

export function convertToCamelCase(input: string) {
  return input.length === 0 ? '' : input.charAt(0).toLowerCase() + input.slice(1);
} 

export function convertToSnakeCase(input: string) {
  return input.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
} 