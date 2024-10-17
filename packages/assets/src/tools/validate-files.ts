import {ThemeVariant} from '@atb-as/theme';
import {constants, promises} from 'fs';
import path from 'path';
import {validOrgIds} from '../generate';
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

async function exists(fileToCheck: string) {
  return await promises
    .access(fileToCheck, constants.F_OK)
    .then(() => true)
    .catch(() => false);
}

async function verifyThatMissingOrgFilesHasCommonReplacements(
  missingOrgFiles: string[],
) {
  let filesMissingFromBothOrgAndCommonFolder = <string[]>[];
  for (const missingOrgFile of missingOrgFiles) {
    const fullPath = path.join(
      __dirname,
      '..',
      '..',
      'files',
      'common',
      missingOrgFile,
    );
    const missingOrgFileExistsInCommon = await exists(fullPath);
    if (!missingOrgFileExistsInCommon)
      filesMissingFromBothOrgAndCommonFolder.push(fullPath);
  }
  return filesMissingFromBothOrgAndCommonFolder;
}

async function validateValidOrgs() {
  const expectedFiles = await fromOrgFiles(ThemeVariant.AtB);
  const extraOrgs = await Promise.all(
    validOrgIds.filter((i) => i != ThemeVariant.AtB).map(fromOrgFiles),
  );

  let hasErrors = false;

  for (let orgAssets of extraOrgs) {
    const filesMissingInOrg = difference(expectedFiles.files, orgAssets.files);
    if (!filesMissingInOrg.length) continue;

    console.log(
      `${themeVariantAsString(
        orgAssets.org,
      )} seems to be missing some assets, checking if common files can be used for these files:\n${filesMissingInOrg.join(
        '\n',
      )}`,
    );
    const filesMissingBothInOrgAndCommon =
      await verifyThatMissingOrgFilesHasCommonReplacements(filesMissingInOrg);

    if (filesMissingBothInOrgAndCommon.length) {
      hasErrors = true;
      console.error(
        `${themeVariantAsString(
          orgAssets.org,
        )} is missing some assets, that also does not have a common file:\n${filesMissingBothInOrgAndCommon.join(
          '\n',
        )}`,
      );
    }
  }

  hasErrors
    ? process.exit(1)
    : console.log('Asset validation completed successfully');
}

function cleanFilenames(filename: string) {
  return filename.split(/\/files\/(.*?)\//)[2];
}

function difference(correct: string[], potential: string[]) {
  return correct.filter((x) => !potential.includes(x));
}
