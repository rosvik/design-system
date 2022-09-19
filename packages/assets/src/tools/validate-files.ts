import {ThemeVariant} from '@atb-as/theme';
import path from 'path';
import {vaildOrgIds} from '../generate';
import {fgNormalizedForUnix, themeVariantAsString} from '../utils';

validateValidOrgs();

async function fromOrgFiles(org: ThemeVariant) {
  const fullPath = path.join(
    __dirname,
    '..',
    '..',
    'files',
    themeVariantAsString(org),
    '**/*.*',
  );
  const files = await fgNormalizedForUnix(fullPath);
  return {org, files: files.map(cleanFilenames)};
}

async function validateValidOrgs() {
  const expectedFiles = await fromOrgFiles(ThemeVariant.AtB);
  const extraOrgs = await Promise.all(
    vaildOrgIds.filter((i) => i != ThemeVariant.AtB).map(fromOrgFiles),
  );

  let hasErrors = false;

  for (let orgAssets of extraOrgs) {
    const diff = difference(expectedFiles.files, orgAssets.files);

    if (diff.length > 0) {
      hasErrors = true;
      console.error(
        `
${themeVariantAsString(orgAssets.org)} is missing some assets:
${diff.join('\n')}

`,
      );
    }
  }

  if (hasErrors) {
    process.exit(1);
  }
}

function cleanFilenames(filename: string) {
  return filename.split(/\/files\/(.*?)\//)[2];
}

function difference(correct: string[], potential: string[]) {
  return correct.filter((x) => !potential.includes(x));
}
