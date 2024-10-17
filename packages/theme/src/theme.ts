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

import {
  AtBThemesFs,
  NfkThemesFs,
  FRAMThemesFs,
  TromsThemesFs,
  InnlandetThemesFs,
  VKTThemesFs,
  FarteThemesFs
} from './generated/themes-fs';

export type Themes<T = Theme> = {
  light: T;
  dark: T;
};
export type Mode = keyof Themes;

export type TextColor = 'primary' | 'secondary' | 'disabled';

export type TextColorType = 'dark' | 'light';

export type RadiusSizes = keyof Theme['border']['radius']

export type ContrastColor = {
  background: string;
  text: string;
};
export type TransportColor<T = ContrastColor> = {
  primary: T;
  secondary: T;
};

export type StatusColor<T = ContrastColor> = {
  primary: T;
  secondary: T;
};

export type InteractiveColor<T = ContrastColor> = {
  default: T;
  hover: T;
  active: T;
  disabled: T;
  outline: T;
  destructive: T;
};

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

export interface Theme {
  spacings: {
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
  };

  interactive: {
    interactive_0: InteractiveColor;
    interactive_1: InteractiveColor;
    interactive_2: InteractiveColor;
    interactive_3: InteractiveColor;
    interactive_destructive: InteractiveColor;
  };
  transport: {
    transport_city: TransportColor;
    transport_region: TransportColor;
    transport_airport_express: TransportColor;
    transport_boat: TransportColor;
    transport_train: TransportColor;
    transport_flexible: TransportColor;
    transport_scooter: TransportColor;
    transport_bike: TransportColor;
    transport_car: TransportColor;
    transport_other: TransportColor;
  };

  status: {
    valid: StatusColor;
    info: StatusColor;
    warning: StatusColor;
    error: StatusColor;
  };

  static: {
    background: {
      background_0: ContrastColor;
      background_1: ContrastColor;
      background_2: ContrastColor;
      background_3: ContrastColor;
      background_accent_0: ContrastColor;
      background_accent_1: ContrastColor;
      background_accent_2: ContrastColor;
      background_accent_3: ContrastColor;
      background_accent_4: ContrastColor;
      background_accent_5: ContrastColor;
    };

    zone_selection: {
      from: ContrastColor;
      to: ContrastColor;
    };
  };

  text: {
    colors: { [key in TextColor]: string };
  };

  border: {
    primary: string;
    secondary: string;
    focus: string;
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
  geofencingZones: GeofencingZoneStyles;
}

export type ContrastColorFs = {
  background: string;
  foreground: {
    primary: string;
    secondary: string;
    disabled: string;
  };
};

export interface ThemeFs {
  color: {
    foreground: {
      dark: ContrastColorFs['foreground'];
      light: ContrastColorFs['foreground'];
      dynamic: ContrastColorFs['foreground'];
      inverse: ContrastColorFs['foreground'];
    };

    interactive: {
      0: InteractiveColor<ContrastColorFs>;
      1: InteractiveColor<ContrastColorFs>;
      2: InteractiveColor<ContrastColorFs>;
      3: InteractiveColor<ContrastColorFs>;
      destructive: InteractiveColor<ContrastColorFs>;
    };

    transport: {
      city: TransportColor<ContrastColorFs>;
      region: TransportColor<ContrastColorFs>;
      airportExpress: TransportColor<ContrastColorFs>;
      boat: TransportColor<ContrastColorFs>;
      train: TransportColor<ContrastColorFs>;
      flexible: TransportColor<ContrastColorFs>;
      scooter: TransportColor<ContrastColorFs>;
      bike: TransportColor<ContrastColorFs>;
      car: TransportColor<ContrastColorFs>;
      other: TransportColor<ContrastColorFs>;
    };

    status: {
      valid: StatusColor<ContrastColorFs>;
      info: StatusColor<ContrastColorFs>;
      warning: StatusColor<ContrastColorFs>;
      error: StatusColor<ContrastColorFs>;
    };

    background: {
      neutral: {
        0: ContrastColorFs;
        1: ContrastColorFs;
        2: ContrastColorFs;
        3: ContrastColorFs;
      };
      accent: {
        0: ContrastColorFs;
        1: ContrastColorFs;
        2: ContrastColorFs;
        3: ContrastColorFs;
        4: ContrastColorFs;
        5: ContrastColorFs;
      };
    };

    zone: {
      from: ContrastColorFs;
      to: ContrastColorFs;
    };

    geofencingZone: GeofencingZoneStyles<ContrastColorFs>;

    border: {
      primary: ContrastColorFs;
      secondary: ContrastColorFs;
      focus: ContrastColorFs;
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

export type Statuses = keyof Theme['status'];

export enum ThemeVariant {
  AtB,
  Nfk,
  FRAM,
  Troms,
  Innlandet,
  VKT,
  Farte,
}

export interface ThemeOptions {
  useFigmaStructure?: boolean
}

/**
 * Get a theme object for a specific organization in the desired format.
 * 
 * @param themeVariant Organization
 * @param themeOptions Set if the new Figma structure should be used
 * @returns Theme object
 */
export function createThemesFor<T extends ThemeOptions>(
  themeVariant: ThemeVariant,
  themeOptions: T = { useFigmaStructure: false } as T
): T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme> {
  switch (themeVariant) {
    case ThemeVariant.AtB:
      if (themeOptions?.useFigmaStructure) {
        return AtBThemesFs as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      } else {
        return AtBThemes as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      }
    case ThemeVariant.Troms:
      if (themeOptions?.useFigmaStructure) {
        return TromsThemesFs as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      } else {
        return TromsThemes as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      }
    case ThemeVariant.Nfk:
      if (themeOptions?.useFigmaStructure) {
        return NfkThemesFs as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      } else {
        return NfkThemes as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      }
    case ThemeVariant.FRAM:
      if (themeOptions?.useFigmaStructure) {
        return FRAMThemesFs as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      } else {
        return FRAMThemes as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      }
    case ThemeVariant.Innlandet:
      if (themeOptions?.useFigmaStructure) {
        return InnlandetThemesFs as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      } else {
        return InnlandetThemes as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      }
    case ThemeVariant.VKT:
      if (themeOptions?.useFigmaStructure) {
        return VKTThemesFs as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      } else {
        return VKTThemes as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      }
    case ThemeVariant.Farte:
      if (themeOptions?.useFigmaStructure) {
        return FarteThemesFs as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      } else {
        return FarteThemes as unknown as T['useFigmaStructure'] extends true ? Themes<ThemeFs> : Themes<Theme>;
      }
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
export function createExtendedThemes<T extends {}, M extends Theme | ThemeFs = Theme>(
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
