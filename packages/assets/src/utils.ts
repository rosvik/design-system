import {ThemeVariant} from '@atb-as/theme';

export {ThemeVariant};
import fg from 'fast-glob';
import normalizeToUnix from 'normalize-path';

export type AssetType = 'colors' | 'all' | 'mono';

export function themeVariantAsString(org: ThemeVariant): string {
  switch (org) {
    case ThemeVariant.Nfk:
      return 'nfk';
    case ThemeVariant.AtB:
      return 'atb';
    case ThemeVariant.FRAM:
      return 'fram';
    case ThemeVariant.Troms:
      return 'troms';
    case ThemeVariant.Innlandet:
      return 'innlandet';
    case ThemeVariant.VKT:
      return 'vkt';
    case ThemeVariant.Farte:
      return 'farte';
  }
}

export function stringAsThemeVariant(org: string): ThemeVariant {
  switch (org) {
    case 'nfk':
      return ThemeVariant.Nfk;
    case 'atb':
      return ThemeVariant.AtB;
    case 'fram':
      return ThemeVariant.FRAM;
    case 'troms':
      return ThemeVariant.Troms;
    case 'innlandet':
      return ThemeVariant.Innlandet;
    case 'vkt':
      return ThemeVariant.VKT;
    case 'farte':
      return ThemeVariant.Farte;
  }

  throw new Error('Invalid org');
}

// Due to globs nature forward UNIX type slashes should be used. Normalize paths.
// All paths returned are also UNIX style. All node functions normalize self, no
// need to do it manually.
// (see https://github.com/mrmlnc/fast-glob#how-to-write-patterns-on-windows)
export function fgNormalizedForUnix(
  path: string,
  options?: {ignore: string[]},
) {
  const opts =
    options && options.ignore
      ? {
          ignore: options.ignore.map((f) => normalizeToUnix(f)),
        }
      : options;
  return fg(normalizeToUnix(path), opts);
}

export {normalizeToUnix};
