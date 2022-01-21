#!/usr/bin/env node

import {vaildOrgIds, generateAssets, searchGlob} from './generate';
import pathlib from 'path';
import {stringAsThemeVariant, themeVariantAsString} from './utils';

import {program, Argument} from 'commander';

type AssetType = 'colors' | 'all' | 'mono';
type InputOptions = {
  debug: boolean;
  generateMonoTheme: boolean;
  glob?: string;
  outDir: string;
};

program
  .name('npx @atb-as/generate-assets')
  .addArgument(
    new Argument('<type>', 'Type of assets to generate')
      .choices(['colors', 'all', 'mono'])
      .argRequired(),
  )
  .addArgument(
    new Argument('<orgId>', 'Generate for specific organization')
      .choices(vaildOrgIds.map(themeVariantAsString))
      .argRequired(),
  )
  .requiredOption('-o, --out-dir <output>', 'Output directory')
  .option('-d, --debug', 'Log all files generated', false)
  .option(
    '-nm, --no-generate-mono-theme',
    'Ignore generating themed mono-icons, but keep general mono icons.',
    false,
  )
  .option(
    '-g, --glob [glob]',
    'Pass in custom blob for matching files.',
    searchGlob,
  );

program.showHelpAfterError();
program.showSuggestionAfterError();

program.parse();

const opts = program.opts<InputOptions>();
const assetType = program.args[0] as AssetType;
const orgId = program.args[1];

const main = async () => {
  const outputFolder = pathlib.join(process.cwd(), opts.outDir);

  try {
    const potentialGlob = findPotentialGlobPattern(process.argv);

    console.log(`Writing assets for ${orgId} to ${outputFolder}`);
    const assets = await generateAssets(
      assetType,
      stringAsThemeVariant(orgId),
      outputFolder,
      {
        patterns: potentialGlob,
        generateMonoTheme: opts.generateMonoTheme,
      },
    );
    if (opts.debug) {
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
    program.help({error: true});
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
