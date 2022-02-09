import fs from 'fs/promises';
import path from 'path';

import {createThemesFor, Themes, ThemeVariant} from '@atb-as/theme/lib/';

import micromatch from 'micromatch';
import fg from 'fast-glob';
import {sed as updateFiles} from 'stream-editor';

import {themeVariantAsString} from './utils';
import {createReadStream, createWriteStream} from 'fs';

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
  const fromBase = (...p: string[]) =>
    fg(path.join(__dirname, '..', 'files', ...p, assetDir, searchGlob));

  if (!vaildOrgIds.includes(orgId))
    throw new Error(`Invalid orgId provided, valid orgIds are ${vaildOrgIds}`);

  const commonFiles = await fromBase('common');
  const orgFiles = await fromBase(themeVariantAsString(orgId));

  const allFilesToBeCopied = mergeFiles(assetType, commonFiles, orgFiles);

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

  if (opts.generateMonoTheme && assetType !== 'colors') {
    const allExtraMonoIcons = await generateMonoIconsInDestinationDirectory(
      assetType,
      orgId,
      destinationDirectory,
    );
    allFiles = allFiles.concat(allExtraMonoIcons);
  }

  return Promise.all(allFiles);
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

  await fs.mkdir(path.join(base, 'dark'), {recursive: true});
  await fs.mkdir(path.join(base, 'light'), {recursive: true});

  let files: Promise<string>[] = [];
  for await (const entry of fg.stream(folder, {
    // Avoid trying to convert what we have from before.
    ignore: ['**/dark/**', '**/light/**'],
  })) {
    files = files.concat([
      rewriteAndSave('dark', themes, entry.toString('utf-8'), base),
      rewriteAndSave('light', themes, entry.toString('utf-8'), base),
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
  const assetDir = assetType == 'all' ? '' : `\/${assetType}`;
  return fullPath.replace(new RegExp(`^.*\/files\/[^\/]+${assetDir}`), '');
}
