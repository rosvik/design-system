#!/usr/bin/env node

import {vaildOrgIds, generateAssets} from './generate';
import pathlib from 'path';

const orgId = process.argv[2];
const outputDirectory = process.argv[3];

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

  Example: npx @atb-as/generate-assets atb ./static --glob "**.svg"
`,
  );
  console.log(`Valid orgIds are: ${vaildOrgIds}`);
}

const outputFolder = pathlib.join(process.cwd(), outputDirectory);

const main = async () => {
  try {
    const potentialGlob = findPotentialGlobPattern(process.argv);

    console.log(`Writing assets for ${orgId} to ${outputFolder}`);
    const assets = await generateAssets(orgId, outputFolder, potentialGlob);
    console.log(
      `Successfully written ${assets.length} assets for ${orgId} to ${outputFolder}`,
    );
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
