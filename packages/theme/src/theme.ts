import merge from 'ts-deepmerge';
import {borderRadius, borderWidth, iconSizes, spacings} from './sizes';
import {ConfigurationOverride, overrideConfig} from './utils/override-config';
import {AtBThemes, NfkThemes, FRAMThemes} from './themes';
export type Themes = {
  light: Theme;
  dark: Theme;
};
export type Mode = keyof Themes;

export type TextColor = 'primary' | 'secondary' | 'disabled';

export type TextColorType = 'dark' | 'light';

export type ContrastColor = {
  background: string;
  text: string;
};

export type InteractiveColor = {
  default: ContrastColor;
  hover: ContrastColor;
  active: ContrastColor;
  disabled: ContrastColor;
  outline: ContrastColor;
  destructive: ContrastColor;
};

export interface Theme {
  spacings: typeof spacings;

  interactive: {
    interactive_0: InteractiveColor;
    interactive_1: InteractiveColor;
    interactive_2: InteractiveColor;
    interactive_3: InteractiveColor;
    interactive_destructive: InteractiveColor;
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

    transport: {
      transport_city: ContrastColor;
      transport_region: ContrastColor;
      transport_boat: ContrastColor;
      transport_train: ContrastColor;
      transport_airport: ContrastColor;
      transport_plane: ContrastColor;
      transport_other: ContrastColor;
    };

    status: {
      valid: ContrastColor;
      info: ContrastColor;
      warning: ContrastColor;
      error: ContrastColor;
    };
  };

  text: {
    colors: {[key in TextColor]: string};
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

export type Statuses = keyof Theme['static']['status'];

export enum ThemeVariant {
  AtB,
  Nfk,
  FRAM,
}

export function createThemesFor(themeVariant: ThemeVariant) {
  switch (themeVariant) {
    case ThemeVariant.AtB:
      return AtBThemes;
    case ThemeVariant.Nfk:
      return NfkThemes;
    case ThemeVariant.FRAM:
      return FRAMThemes;
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
export function createExtendedThemes<T>(
  themes: Themes,
  extension: {light: T; dark: T},
) {
  return {
    light: merge(themes.light, extension.light),
    dark: merge(themes.dark, extension.dark),
  };
}
