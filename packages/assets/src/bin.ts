#!/usr/bin/env node

import {vaildOrgIds, generateAssets, searchGlob} from './generate';
import pathlib from 'path';
import {stringAsThemeVariant, themeVariantAsString} from './utils';

const orgId = process.argv[2];
const outputDirectory = process.argv[3];

const verbose =
  process.argv.includes('-v') || process.argv.includes('--verbose');
const ignoreMono =
  process.argv.includes('-i') || process.argv.includes('--ignoreMono');

if (process.argv.includes('-h')) {
  showHelp();
  process.exit(0);
}

if (!orgId || !outputDirectory) {
  console.error('orgId and/or outputDirectory seems to be missing!');
  showHelp();
  process.exit(1);
}

function showHelp() {
  console.log(
    'usage: npx @atb-as/generate-assets <orgId> <output directory> [--glob <string>]',
  );
  console.log(
    `
Outputs assets for a specific organization in the specified output directory.

  Inputs:
    -v | --verbose        Log all files generated
    -h                    Show this help
    -g | --glob           Pass in custom blob for matching files. Defaults to ${searchGlob}
    -i | --ignoreMono     Don't generate dark/light mono based on theme colors for orgId

  Example: npx @atb-as/generate-assets atb ./static --glob "**.svg"
`,
  );
  console.log(`Valid orgIds are: ${vaildOrgIds.map(themeVariantAsString)}`);
}

const outputFolder = pathlib.join(process.cwd(), outputDirectory);

const main = async () => {
  try {
    const potentialGlob = findPotentialGlobPattern(process.argv);

    console.log(`Writing assets for ${orgId} to ${outputFolder}`);
    const assets = await generateAssets(
      stringAsThemeVariant(orgId),
      outputFolder,
      {
        patterns: potentialGlob,
        ignoreGenerateMonoIcons: ignoreMono,
      },
    );
    if (verbose) {
      console.log(`Written ${assets.length} assets for ${orgId}:\n`);

      console.log();
      assets.forEach((i) => console.log(i));
    } else {
      console.log(
        `Successfully written ${assets.length} assets for ${orgId} to ${outputFolder}`,
      );
    }
  } catch (e) {
    console.error((e as Error)?.message);
    console.log('---'); // new line
    showHelp();
    process.exit(1);
  }
};

main();

function findPotentialGlobPattern(args: string[]) {
  for (let arg in args) {
    if (!args[arg]?.startsWith('--glob') && !args[arg]?.startsWith('-g'))
      continue;

    // Is glob, check for valid next argument or if using =
    if (args[arg].includes('=')) {
      const [, glob] = args[arg].split('=');
      return glob;
    }
    const potentialGlob = args[Number(arg) + 1];
    if (!potentialGlob) {
      throw new Error('Missing argument to --glob.');
    }
    return potentialGlob;
  }
  return undefined;
}
