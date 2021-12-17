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

const fromBase = (...p: string[]) =>
  fg(path.join(__dirname, '..', 'files', ...p, searchGlob));

type Options = {
  ignoreGenerateMonoIcons?: boolean;
  patterns?: string | readonly string[];
};
const defaultOpts: Options = {ignoreGenerateMonoIcons: false};

export async function generateAssets(
  orgId: ThemeVariant,
  destinationDirectory: string,
  opts: Options = defaultOpts,
) {
  if (!vaildOrgIds.includes(orgId))
    throw new Error(`Invalid orgId provided, valid orgIds are ${vaildOrgIds}`);

  const commonFiles = await fromBase('common');
  const orgFiles = await fromBase(themeVariantAsString(orgId));

  const allFilesToBeCopied = mergeFiles(commonFiles, orgFiles);

  const potentiallyFiltered = opts.patterns
    ? micromatch(allFilesToBeCopied, opts.patterns)
    : allFilesToBeCopied;

  let allFiles = potentiallyFiltered.map(async (absolutePath) => {
    const relativePath = getGeneralNameWithoutFullPath(absolutePath);
    const destinationPath = path.join(destinationDirectory, relativePath);

    await fs.mkdir(path.dirname(destinationPath), {recursive: true});
    await fs.copyFile(absolutePath, destinationPath);

    return destinationPath;
  });

  if (opts.ignoreGenerateMonoIcons) {
    const allExtraMonoIcons = await generateMonoIconsInDestinationDirectory(
      orgId,
      destinationDirectory,
    );
    allFiles = allFiles.concat(allExtraMonoIcons);
  }

  return Promise.all(allFiles);
}

export async function generateMonoIconsInDestinationDirectory(
  orgId: ThemeVariant,
  destinationDirectory: string,
) {
  const themes = createThemesFor(orgId);

  // Assume mono-icons is created directly on destination root.
  const base = path.join(destinationDirectory, 'mono-icons');
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
  const destination = path.join(monoIconsBase, color, relativeFileName);

  await updateFiles({
    from: createReadStream(absoluteFile),
    to: createWriteStream(destination),
    match: /((fill|stroke)\=\"(?:[^"]+)\")/,
    replacement: `$2="${themes[color].text.colors.primary}"`,
  });

  return destination;
}

function mergeFiles(commonFiles: string[], orgFiles: string[]) {
  const relativeOrgFiles = orgFiles.map(getGeneralNameWithoutFullPath);
  const commonsWithoutOverrides = commonFiles.filter(function (filepath) {
    return !relativeOrgFiles.includes(getGeneralNameWithoutFullPath(filepath));
  });

  return commonsWithoutOverrides.concat(orgFiles);
}

function getGeneralNameWithoutFullPath(fullPath: string) {
  return fullPath.replace(/^.*\/files\/[^\/]+/, '');
}
