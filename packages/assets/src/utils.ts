import {ThemeVariant} from '@atb-as/theme/lib/';

export {ThemeVariant};

export function themeVariantAsString(org: ThemeVariant): string {
  switch (org) {
    case ThemeVariant.Nfk:
      return 'nfk';
    case ThemeVariant.AtB:
      return 'atb';
  }
}

export function stringAsThemeVariant(org: string): ThemeVariant {
  switch (org) {
    case 'nfk':
      return ThemeVariant.Nfk;
    case 'atb':
      return ThemeVariant.AtB;
  }

  throw new Error('Invalid org');
}
