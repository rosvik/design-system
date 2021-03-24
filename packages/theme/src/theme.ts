import hexToRgba from 'hex-to-rgba';
import merge from 'ts-deepmerge';
import {backgrounds, colors} from './colors';
import {borderRadius, borderWidth, iconSizes, spacings} from './sizes';
import {ConfigurationOverride, overrideConfig} from './utils/override-config';

export type Themes = {
  light: Theme;
  dark: Theme;
};
export type Mode = keyof Themes;

export type TextColor = 'primary' | 'secondary' | 'disabled';

type TextColorType = 'dark' | 'light';

export type ContrastColor = {
  backgroundColor: string;
  color: string;
  textColorType: TextColorType;
};
const contrastColor = (
  backgroundColor: string = colors.white,
  textColorType: TextColorType = 'dark',
): ContrastColor => {
  return {backgroundColor, color: colors.text[textColorType], textColorType};
};
type StatusColor = {
  main: ContrastColor;
  bg: ContrastColor;
};

export interface Theme {
  spacings: typeof spacings;

  colors: {
    background_0: ContrastColor;
    background_1: ContrastColor;
    background_2: ContrastColor;
    background_3: ContrastColor;
    primary_1: ContrastColor;
    primary_2: ContrastColor;
    primary_3: ContrastColor;
    primary_destructive: ContrastColor;
    secondary_1: ContrastColor;
    secondary_2: ContrastColor;
    secondary_3: ContrastColor;
    secondary_4: ContrastColor;
    transport_city: ContrastColor;
    transport_region: ContrastColor;
    transport_boat: ContrastColor;
    transport_train: ContrastColor;
    transport_airport: ContrastColor;
    transport_plane: ContrastColor;
    transport_other: ContrastColor;
  };

  status: {
    valid: StatusColor;
    info: StatusColor;
    warning: StatusColor;
    error: StatusColor;
  };

  text: {
    colors: typeof defaultTextColors.light;
  };

  border: {
    primary: string;
    secondary: string;
    focus: string;
    radius: typeof borderRadius;
    width: typeof borderWidth;
  };
  icon: {
    size: typeof iconSizes;
  };
}

export type Statuses = keyof Theme['status'];

export const defaultTextColors: {
  [key in TextColorType]: {[key in TextColor]: string};
} = {
  dark: {
    primary: colors.text.dark,
    secondary: hexToRgba(colors.text.dark, 0.6),
    disabled: hexToRgba(colors.text.dark, 0.2),
  },
  light: {
    primary: colors.text.light,
    secondary: hexToRgba(colors.text.light, 0.6),
    disabled: hexToRgba(colors.text.light, 0.2),
  },
};

export const themes: Themes = {
  light: {
    spacings: spacings,

    colors: {
      background_0: contrastColor(backgrounds.light.level0, 'dark'),
      background_1: contrastColor(backgrounds.light.level1, 'dark'),
      background_2: contrastColor(backgrounds.light.level2, 'dark'),
      background_3: contrastColor(backgrounds.light.level3, 'dark'),
      primary_1: contrastColor(colors.primary.green_500, 'dark'),
      primary_2: contrastColor(colors.secondary.cyan_500, 'dark'),
      primary_3: contrastColor(colors.secondary.blue_500, 'light'),
      primary_destructive: contrastColor(colors.secondary.red_500, 'light'),
      secondary_1: contrastColor(colors.primary.gray_500, 'light'),
      secondary_2: contrastColor(colors.primary.gray_200, 'dark'),
      secondary_3: contrastColor(colors.secondary.cyan_200, 'dark'),
      secondary_4: contrastColor(colors.primary.gray_50, 'dark'),

      transport_city: contrastColor(colors.primary.green_600),
      transport_region: contrastColor(colors.secondary.blue_500),
      transport_boat: contrastColor(colors.secondary.cyan_700),
      transport_train: contrastColor(colors.secondary.red_500),
      transport_airport: contrastColor(colors.other.ekspressen_600),
      transport_plane: contrastColor(colors.other.orange_500),
      transport_other: contrastColor(colors.primary.gray_400),
    },
    status: {
      valid: {
        main: contrastColor(colors.primary.green_500, 'dark'),
        bg: contrastColor(hexToRgba(colors.primary.green_500, 0.25), 'dark'),
      },
      info: {
        main: contrastColor(colors.secondary.blue_500, 'light'),
        bg: contrastColor(hexToRgba(colors.secondary.blue_500, 0.25), 'dark'),
      },
      warning: {
        main: contrastColor(colors.secondary.yellow_500, 'dark'),
        bg: contrastColor(hexToRgba(colors.secondary.yellow_500, 0.25), 'dark'),
      },
      error: {
        main: contrastColor(colors.secondary.red_500, 'light'),
        bg: contrastColor(hexToRgba(colors.secondary.red_500, 0.25), 'dark'),
      },
    },
    text: {
      colors: defaultTextColors['dark'],
    },
    border: {
      primary: colors.primary.gray_50,
      secondary: colors.text.dark,
      focus: colors.secondary.blue_500,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
  dark: {
    spacings: spacings,

    colors: {
      background_0: contrastColor(backgrounds.dark.level0, 'light'),
      background_1: contrastColor(backgrounds.dark.level1, 'light'),
      background_2: contrastColor(backgrounds.dark.level2, 'light'),
      background_3: contrastColor(backgrounds.dark.level3, 'light'),
      primary_1: contrastColor(colors.primary.green_500, 'dark'),
      primary_2: contrastColor(colors.secondary.blue_500, 'light'),
      primary_3: contrastColor(colors.secondary.cyan_500, 'dark'),
      primary_destructive: contrastColor(colors.secondary.red_500, 'light'),
      secondary_1: contrastColor(colors.primary.gray_300, 'dark'),
      secondary_2: contrastColor(colors.primary.gray_500, 'light'),
      secondary_3: contrastColor(colors.secondary.blue_600, 'light'),
      secondary_4: contrastColor(colors.primary.gray_600, 'light'),

      transport_city: contrastColor(colors.primary.green_500),
      transport_region: contrastColor(colors.secondary.blue_500),
      transport_boat: contrastColor(colors.secondary.cyan_300),
      transport_train: contrastColor(colors.secondary.red_400),
      transport_airport: contrastColor(colors.other.ekspressen_500),
      transport_plane: contrastColor(colors.other.orange_500),
      transport_other: contrastColor(colors.primary.gray_300),
    },
    status: {
      valid: {
        main: contrastColor(colors.primary.green_500, 'dark'),
        bg: contrastColor(hexToRgba(colors.primary.green_500, 0.25), 'light'),
      },
      info: {
        main: contrastColor(colors.secondary.cyan_500, 'dark'),
        bg: contrastColor(hexToRgba(colors.secondary.cyan_500, 0.25), 'light'),
      },
      warning: {
        main: contrastColor(colors.secondary.yellow_500, 'dark'),
        bg: contrastColor(hexToRgba(colors.secondary.yellow_500, 0.25), 'dark'),
      },
      error: {
        main: contrastColor(colors.secondary.red_500, 'light'),
        bg: contrastColor(hexToRgba(colors.secondary.red_500, 0.25), 'dark'),
      },
    },
    text: {
      colors: defaultTextColors['light'],
    },
    border: {
      primary: colors.primary.gray_600,
      secondary: colors.text.light,
      focus: colors.secondary.cyan_500,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

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
export function createExtendedThemes<T>(extension: {light: T; dark: T}) {
  return {
    light: merge(themes.light, extension.light),
    dark: merge(themes.dark, extension.dark),
  };
}
