import fs from 'fs/promises';
import path from 'path';

import {createThemesFor, Themes, ThemeVariant} from '@atb-as/theme/lib/';

import micromatch from 'micromatch';
import fg from 'fast-glob';
import {sed as updateFiles} from 'stream-editor';

import {themeVariantAsString} from './utils';
import {log} from './logger';
import {createReadStream, createWriteStream} from 'fs';
import normalize from 'normalize-path';

export const vaildOrgIds = [ThemeVariant.AtB, ThemeVariant.Nfk];
export const searchGlob = '**/*.{svg,png,jpg,jpeg,ico}';
export const searchGlobSvg = '**/*.svg';

type AssetTypes = 'colors' | 'mono' | 'all';

type Options = {
  generateMonoTheme?: boolean;
  onlyOutputMono?: boolean;
  patterns?: string | readonly string[];
};
const defaultOpts: Options = {
  generateMonoTheme: true,
  onlyOutputMono: false,
};

export async function generateAssets(
  assetType: AssetTypes,
  orgId: ThemeVariant,
  destinationDirectory: string,
  opts: Options = defaultOpts,
) {
  const assetDir = assetType == 'all' ? '{colors,mono}' : assetType;
  const fromBase = (...p: string[]) => {
    const fullPath = path.join(
      __dirname,
      '..',
      'files',
      ...p,
      assetDir,
      searchGlob,
    );

    log('searching for files in', fullPath);
    return fg(normalize(fullPath));
  };

  if (!vaildOrgIds.includes(orgId))
    throw new Error(`Invalid orgId provided, valid orgIds are ${vaildOrgIds}`);

  const commonFiles = await fromBase('common');
  const orgFiles = await fromBase(themeVariantAsString(orgId));

  log('Found common files:', commonFiles.length);
  log('Found org files for', orgId, ':', orgFiles.length);

  log('Merging files for ', assetType);
  const allFilesToBeCopied = mergeFiles(assetType, commonFiles, orgFiles);
  log('Found merged files:', allFilesToBeCopied.length);

  const potentiallyFiltered = opts.patterns
    ? micromatch(allFilesToBeCopied, opts.patterns)
    : allFilesToBeCopied;

  let allFiles = potentiallyFiltered.map(async (absolutePath) => {
    const relativePath = getGeneralNameWithoutFullPath(assetType, absolutePath);
    const destinationPath = path.join(destinationDirectory, relativePath);

    await fs.mkdir(path.dirname(destinationPath), {recursive: true});
    await fs.copyFile(absolutePath, destinationPath);

    return destinationPath;
  });

  log('Total files before generated mono icons:', allFiles.length);

  let created = await Promise.all(allFiles);
  if (opts.generateMonoTheme && assetType !== 'colors') {
    const allExtraMonoIcons = await generateMonoIconsInDestinationDirectory(
      assetType,
      orgId,
      destinationDirectory,
    );
    created = created.concat(await Promise.all(allExtraMonoIcons));
  }
  log('Total files after generated mono icons:', created.length);

  return created;
}

export async function generateMonoIconsInDestinationDirectory(
  assetType: AssetTypes,
  orgId: ThemeVariant,
  destinationDirectory: string,
) {
  const themes = createThemesFor(orgId);

  // Assume mono-icons is created directly on destination root.
  const base = path.join(
    destinationDirectory,
    assetType === 'all' ? 'mono' : '',
  );
  const folder = path.join(base, searchGlobSvg);

  const darkBase = path.join(base, 'dark');
  const lightBase = path.join(base, 'light');

  await fs.mkdir(darkBase, {recursive: true});
  await fs.mkdir(lightBase, {recursive: true});

  let files: Promise<string>[] = [];
  for (const entry of await fg(normalize(folder), {
    // Avoid trying to convert what we have from before.
    ignore: [normalize(darkBase), normalize(lightBase)],
  })) {
    files = files.concat([
      rewriteAndSave('dark', themes, entry, base),
      rewriteAndSave('light', themes, entry, base),
    ]);
  }
  return files;
}

async function rewriteAndSave(
  color: keyof Themes,
  themes: Themes,
  absoluteFile: string,
  monoIconsBase: string,
) {
  const relativeFileName = path.relative(monoIconsBase, absoluteFile);
  const filename = path.basename(relativeFileName);
  const destinationDir = path.join(
    monoIconsBase,
    color,
    path.dirname(relativeFileName),
  );

  await fs.mkdir(destinationDir, {recursive: true});
  const destination = path.join(destinationDir, filename);

  await updateFiles({
    from: createReadStream(absoluteFile),
    to: createWriteStream(destination),
    match: /((fill|stroke)\=\"(?:[^"]+)\")/,
    replacement: `$2="${themes[color].text.colors.primary}"`,
  });

  return destination;
}

function mergeFiles(
  assetType: AssetTypes,
  commonFiles: string[],
  orgFiles: string[],
) {
  const relativeOrgFiles = orgFiles.map((f) =>
    getGeneralNameWithoutFullPath(assetType, f),
  );
  const commonsWithoutOverrides = commonFiles.filter(function (filepath) {
    return !relativeOrgFiles.includes(
      getGeneralNameWithoutFullPath(assetType, filepath),
    );
  });

  return commonsWithoutOverrides.concat(orgFiles);
}

function getGeneralNameWithoutFullPath(
  assetType: AssetTypes,
  fullPath: string,
) {
  const separator = escapeRegex(path.sep);
  const assetDir = escapeRegex(
    assetType == 'all' ? '' : `${path.sep}${assetType}`,
  );
  return fullPath.replace(
    new RegExp(`^.*${separator}files${separator}[^${separator}]+${assetDir}`),
    '',
  );
}
function escapeRegex(str: string) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
