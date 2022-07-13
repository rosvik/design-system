import fs from 'fs/promises';
import path from 'path';
import {AssetType} from './utils';

type Data = Partial<{
  mono: Record<string, MonoType>;
  images: Record<string, ColorType>;
  illustration: Record<string, ColorType>;
}>;
export async function generateTs(
  allFiles: string[],
  assetTypeInput: AssetType,
  outputDir: string,
  tsOutput: string = outputDir,
) {
  const data = generateData(allFiles, assetTypeInput, outputDir);
  const generatedContents = template(data);

  await fs.mkdir(tsOutput, {recursive: true});
  const destinationFile = path.join(tsOutput, 'generated-icons.ts');
  await fs.writeFile(destinationFile, generatedContents);

  return destinationFile;
}

function template(data: Data) {
  return `// NB! NB! NB!
// AUTO GENERATED FILE. DON'T CHANGE
// NB! NB! NB!
export const icons = ${JSON.stringify(data, null, 2)};
export type Icons = typeof icons;

export type ColorType = {
  relative: string;
  absolute: string;
  assetType: 'colors';
  colorType: 'illustrations' | 'images';
  darkable: boolean;
  id: string;
};

export type MonoType = {
  relative: string;
  absolute: string;
  assetType: 'mono';
  id: string;
};

export type IconType = ColorType | MonoType;


${data.mono ? `export type MonoIcons = keyof Icons['mono'];` : ''}
${data.images ? `export type Images = keyof Icons['images'];` : ''}
${
  data.illustration
    ? `export type Illustrations = keyof Icons['illustration'];`
    : ''
}
`;
}

function toUniqueObject<T extends IconType>(list: T[]) {
  return pickBy(list, (i) => i.id);
}

function generateData(
  allFiles: string[],
  assetTypeInput: AssetType,
  outputDir: string,
) {
  const constructs = allFiles
    .map((f) => toTypeCoonstruct(f, assetTypeInput, outputDir))
    .filter(Boolean) as IconType[];

  const groupedByMode = groupBy(constructs, (i) => i.assetType);
  const mono = groupedByMode.mono as MonoType[];
  const colors = groupedByMode.colors
    ? groupBy(groupedByMode.colors as ColorType[], (i) => i.colorType)
    : undefined;

  return {
    mono: mono ? toUniqueObject(mono) : undefined,
    images: colors?.images ? toUniqueObject(colors.images) : undefined,
    illustration: colors?.illustrations
      ? toUniqueObject(colors.illustrations)
      : undefined,
  };
}

type ColorType = {
  relative: string;
  absolute: string;
  assetType: 'colors';
  colorType: 'illustrations' | 'images';
  darkable: boolean;
  id: string;
};

type MonoType = {
  relative: string;
  absolute: string;
  assetType: 'mono';
  id: string;
};

type IconType = ColorType | MonoType;
function toTypeCoonstruct(
  absolute: string,
  assetTypeInput: AssetType,
  outputDir: string,
): IconType | undefined {
  const relative = absolute.replace(outputDir, '');

  let assetType =
    assetTypeInput == 'all'
      ? relative.match(/^.?colors/)
        ? 'colors'
        : 'mono'
      : assetTypeInput;

  if (assetType === 'mono' && relative.match(/(\/dark\/|\/light\/)/)) {
    return undefined;
  }

  if (assetType == 'colors') {
    return {
      relative,
      absolute,
      assetType: 'colors',
      colorType: isIllustration(relative) ? 'illustrations' : 'images',
      darkable: isDarkable(relative),
      id: toIDPath(relative),
    };
  }

  return {
    relative,
    absolute,
    assetType: 'mono',
    id: toIDPath(relative),
  };
}
const darkOrLight = /\/(?:dark|light)\//;

function toIDPath(relative: string) {
  return relative
    .replace(darkOrLight, '/')
    .replace(
      /^\/?(?:(?:mono|colors)\/)?(?:(?:illustrations|images)\/)?(.*)\..{3}$/,
      '$1',
    );
}
function isDarkable(relative: string) {
  return relative.match(darkOrLight) !== null;
}
function isIllustration(relative: string) {
  return relative.match(/^\/?(?:(?:mono|colors)\/)?illustrations\//) !== null;
}

const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

const pickBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (previous[group]) return previous;
    previous[group] = currentItem;
    return previous;
  }, {} as Record<K, T>);
