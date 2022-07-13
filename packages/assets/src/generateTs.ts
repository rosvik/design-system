import fs from 'fs/promises';
import path from 'path';
import {AssetType} from './utils';

type Data = Partial<{
  mono: Record<string, MonoTypeConstruct>;
  images: Record<string, ColorsTypeConstruct>;
  illustration: Record<string, ColorsTypeConstruct>;
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

${data.mono ? `export type MonoIcons = keyof Icons['mono'];` : ''}
${data.images ? `export type Images = keyof Icons['images'];` : ''}
${
  data.illustration
    ? `export type Illustrations = keyof Icons['illustration'];`
    : ''
}
`;
}

function toUniqueObject<T extends TypeConstruct>(list: T[]) {
  return pickBy(list, (i) => i.id);
}

function generateData(
  allFiles: string[],
  assetTypeInput: AssetType,
  outputDir: string,
) {
  const constructs = allFiles
    .map((f) => toTypeCoonstruct(f, assetTypeInput, outputDir))
    .filter(Boolean) as TypeConstruct[];

  const groupedByMode = groupBy(constructs, (i) => i.assetType);
  const mono = groupedByMode.mono as MonoTypeConstruct[];
  const colors = groupedByMode.colors
    ? groupBy(groupedByMode.colors as ColorsTypeConstruct[], (i) => i.colorType)
    : undefined;

  return {
    mono: mono ? toUniqueObject(mono) : undefined,
    images: colors?.images ? toUniqueObject(colors.images) : undefined,
    illustration: colors?.illustrations
      ? toUniqueObject(colors.illustrations)
      : undefined,
  };
}

type ColorsTypeConstruct = {
  relative: string;
  absolute: string;
  assetType: 'colors';
  colorType: 'illustrations' | 'images';
  darkable: boolean;
  id: string;
};

type MonoTypeConstruct = {
  relative: string;
  absolute: string;
  assetType: 'mono';
  id: string;
};

type TypeConstruct = ColorsTypeConstruct | MonoTypeConstruct;
function toTypeCoonstruct(
  absolute: string,
  assetTypeInput: AssetType,
  outputDir: string,
): TypeConstruct | undefined {
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
      /^\/(?:(?:mono|colors)\/)?(?:(?:illustrations|images)\/)?(.*)\..{3}$/,
      '$1',
    );
}
function isDarkable(relative: string) {
  return relative.match(darkOrLight) !== null;
}
function isIllustration(relative: string) {
  return relative.match(/^\/(?:(?:mono|colors)\/)?illustrations\//) !== null;
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
