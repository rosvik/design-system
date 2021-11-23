#!/usr/bin/env node

import {vaildOrgIds, generateAssets} from './generate';
import pathlib from 'path';

const orgId = process.argv[2];
const outputDirectory = process.argv[3];

if (!orgId || !outputDirectory) {
  console.error('orgId and/or outputDirectory seems to be missing!');
  showHelp();
  process.exit(1);
}

function showHelp() {
  console.log('usage: npx @atb-as/generate-assets <orgId> <output directory>');
  console.log(
    'Outputs assets for a specific organization in the specified output directory.',
  );
  console.log(`Valid orgIds are: ${vaildOrgIds}`);
}

const outputFolder = pathlib.join(process.cwd(), outputDirectory);

const main = async () => {
  try {
    console.log(`Writing assets for ${orgId} to ${outputFolder}`);
    await generateAssets(orgId, outputFolder);
    console.log(`Successfully written assets for ${orgId} to ${outputFolder}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

main();
