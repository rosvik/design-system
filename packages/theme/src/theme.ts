import merge from 'ts-deepmerge';
import { ConfigurationOverride, overrideConfig } from './utils/override-config';
import {
  AtBThemes,
  NfkThemes,
  FRAMThemes,
  TromsThemes,
  InnlandetThemes,
  VKTThemes,
  FarteThemes
} from './generated/themes';

export type Themes<T = Theme> = {
  light: T;
  dark: T;
};
export type Mode = keyof Themes;

export type TextColor = keyof Theme['color']['foreground']['dynamic'];
export type TextColorType = keyof Theme['color']['foreground'];

export type RadiusSizes = keyof Theme['border']['radius']

export type BackgroundColors = Theme['color']['background']
export type BackgroundColorName = keyof Theme['color']['background']
export type BackgroundColorState<T extends BackgroundColorName> = keyof Theme['color']['background'][T]

export type TransportColor<T = ContrastColor> = {
  primary: T;
  secondary: T;
};
export type TransportColorName = keyof Theme['color']['transport']
export type TransportColors = Theme['color']['transport']
export type TransportColorState = keyof Theme['color']['transport']['city']

export type StatusColor<T = ContrastColor> = {
  primary: T;
  secondary: T;
};
export type StatusColorName = keyof Theme['color']['status']
export type StatusColors = Theme['color']['status']

export type InteractiveColor<T = ContrastColor> = {
  default: T;
  hover: T;
  active: T;
  disabled: T;
  outline: T;
  destructive: T;
};
export type InteractiveColorName = keyof Theme['color']['interactive']
export type InteractiveColors = Theme['color']['interactive']
export type InteractiveState = keyof InteractiveColor

// The colors can be changed, but should follow standard practice as commented:
export enum GeofencingZoneCodes {
  allowed = 'Allowed', // blue
  slow = 'Slow', // yellow
  noParking = 'NoParking', // red
  noEntry = 'NoEntry', // dark/black
}
export type GeofencingZoneKeys = keyof typeof GeofencingZoneCodes;
export type GeofencingZoneStyle<T = ContrastColor> = {
  color: T;
  fillOpacity: number;
  strokeOpacity: number;
  layerIndexWeight: number;
};
export type GeofencingZoneStyles<T = ContrastColor> = {
  [GZKey in GeofencingZoneKeys]: GeofencingZoneStyle<T>;
};

export type ContrastColor = {
  background: string;
  foreground: {
    primary: string;
    secondary: string;
    disabled: string;
  };
};

export interface Theme {
  color: {
    foreground: {
      dark: ContrastColor['foreground'];
      light: ContrastColor['foreground'];
      dynamic: ContrastColor['foreground'];
      inverse: ContrastColor['foreground'];
    };

    interactive: {
      0: InteractiveColor<ContrastColor>;
      1: InteractiveColor<ContrastColor>;
      2: InteractiveColor<ContrastColor>;
      3: InteractiveColor<ContrastColor>;
      destructive: InteractiveColor<ContrastColor>;
    };

    transport: {
      city: TransportColor<ContrastColor>;
      region: TransportColor<ContrastColor>;
      airportExpress: TransportColor<ContrastColor>;
      boat: TransportColor<ContrastColor>;
      train: TransportColor<ContrastColor>;
      flexible: TransportColor<ContrastColor>;
      scooter: TransportColor<ContrastColor>;
      bike: TransportColor<ContrastColor>;
      car: TransportColor<ContrastColor>;
      other: TransportColor<ContrastColor>;
    };

    status: {
      valid: StatusColor<ContrastColor>;
      info: StatusColor<ContrastColor>;
      warning: StatusColor<ContrastColor>;
      error: StatusColor<ContrastColor>;
    };

    brand: {
      primary: ContrastColor;
      secondary: ContrastColor;
    };

    background: {
      neutral: {
        0: ContrastColor;
        1: ContrastColor;
        2: ContrastColor;
        3: ContrastColor;
      };
      accent: {
        0: ContrastColor;
        1: ContrastColor;
        2: ContrastColor;
        3: ContrastColor;
        4: ContrastColor;
        5: ContrastColor;
      };
    };

    zone: {
      from: ContrastColor;
      to: ContrastColor;
    };

    geofencingZone: GeofencingZoneStyles<ContrastColor>;

    border: {
      primary: ContrastColor;
      secondary: ContrastColor;
      focus: ContrastColor;
    };
  };

  border: {
    radius: {
      small: number;
      regular: number;
      circle: number;
    };
    width: {
      slim: number;
      medium: number;
    };
  };

  icon: {
    size: {
      xSmall: number;
      small: number;
      normal: number;
      large: number;
    }
  };

  spacing: {
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
  };

  typography: {
    ios: {
      font: string;
      number: number;
    };

    android: {
      font: string;
      number: number;
    };

    web: {
      font: string;
      number: number;
    };
  };
};

export enum ThemeVariant {
  AtB,
  Nfk,
  FRAM,
  Troms,
  Innlandet,
  VKT,
  Farte,
}

/**
 * Get a theme object for a specific organization in the desired format.
 * 
 * @param themeVariant Organization
 * @returns Theme object
 */
export function createThemesFor(
  themeVariant: ThemeVariant
): Themes {
  switch (themeVariant) {
    case ThemeVariant.AtB:
      return AtBThemes;
    case ThemeVariant.Troms:
      return TromsThemes;
    case ThemeVariant.Nfk:
      return NfkThemes;
    case ThemeVariant.FRAM:
      return FRAMThemes;
    case ThemeVariant.Innlandet:
      return InnlandetThemes;
    case ThemeVariant.VKT:
      return VKTThemes;
    case ThemeVariant.Farte:
      return FarteThemes;
    default:
      throw Error('A valid ThemeVariant must be provided');
  }
}

/**
 * Create new themes (light/dark) with optinally overriden defaults.
 *
 * @example extending nested features
 * ```ts
 * const themes = createThemes({
 *   light: {
 *     spacings: {
 *       medium: 20,
 *     },
 *   },
 * });
 *
 * themes.dark.spacings.medium;
 * //=> 20
 * ```
 *
 * @param overrides - Properties to override base themes with, on `Theme` level
 * @returns themes
 */
export function createThemes(
  themes: Themes,
  overrides?: ConfigurationOverride<Themes>,
): Themes {
  if (!overrides) return themes;
  return overrideConfig(themes, overrides);
}

/**
 * Use Theme as base and extend with new properties. Properties
 * can be nested and will be deep merged.
 *
 * @example extending nested features
 * ```ts
 * type FooExtension = {
 *   statusBarStyle: 'dark' | 'light';
 * }
 * const _themes = createExtendedThemes<FooExtension>({
 *   light: {statusBarStyle: 'dark'},
 *   dark: {statusBarStyle: 'light'}
 * });
 *
 * _themes.dark.statusBarStyle;
 * //=> (property) statusBarStyle: "dark" | "light"
 * ```
 *
 * @param extension - Object to extend original theme. Can be nested with same keys
 * @returns new deep merged intersection themes
 */
export function createExtendedThemes<T extends {}, M extends Theme = Theme>(
  themes: Themes<M>,
  extension: { light: T; dark: T },
): {
  light: Themes<M>['light'] & T,
  dark: Themes<M>['dark'] & T,
} {
  return {
    light: merge(themes.light, extension.light) as Themes<M>['light'] & T,
    dark: merge(themes.dark, extension.dark) as Themes<M>['dark'] & T,
  };
}
