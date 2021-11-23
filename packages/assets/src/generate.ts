import fs from 'fs';
import path from 'path';

export const vaildOrgIds = ['atb', 'nfk'];

async function getFiles(entry: string): Promise<string[]> {
  const originalEntries = await fs.promises.readdir(entry, {
    withFileTypes: true,
  });

  let files: string[] = [];
  for (let foundEntry of originalEntries) {
    const res = path.resolve(entry, foundEntry.name);
    const result = foundEntry.isDirectory() ? await getFiles(res) : [res];
    files = files.concat(result);
  }
  return files;
}

export const generateAssets = async (
  orgId: string,
  destinationDirectory: string,
) => {
  if (!vaildOrgIds.includes(orgId))
    throw new Error(`Invalid orgId provided, valid orgIds are ${vaildOrgIds}`);

  const commonFolder = path.join(__dirname, '..', 'files', 'common');
  const orgFolder = path.join(__dirname, '..', 'files', orgId);

  const commonFiles = await getFiles(commonFolder);
  const orgFiles = await getFiles(orgFolder);

  const allFilesToBeCopied = commonFiles.concat(orgFiles);

  const allPromises = allFilesToBeCopied.map(async (filepath) => {
    const splitPath =
      filepath.split(`/files/${orgId}`)[1] ??
      filepath.split(`/files/common`)[1];
    const destinationPath = destinationDirectory + splitPath;

    await fs.promises.mkdir(path.dirname(destinationPath), {recursive: true});
    await fs.promises.copyFile(filepath, destinationPath);
  });

  return Promise.all(allPromises);
};

export default generateAssets;
