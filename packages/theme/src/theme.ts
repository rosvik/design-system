import merge from 'ts-deepmerge';
import {borderRadius, borderWidth, iconSizes, spacings} from './sizes';
import {ConfigurationOverride, overrideConfig} from './utils/override-config';
import {AtBThemes, NfkThemes} from './themes';
export type Themes = {
  light: Theme;
  dark: Theme;
};
export type Mode = keyof Themes;

export type TextColor = 'primary' | 'secondary' | 'disabled';

export type TextColorType = 'dark' | 'light';

export type ContrastColor = {
  backgroundColor: string;
  color: string;
  textColorType: TextColorType;
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
    background_accent: ContrastColor;
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

export type Statuses = keyof Theme['status'];

export enum ThemeVariant {
  AtB,
  Nfk,
}

export function createThemesFor(themeVariant: ThemeVariant) {
  switch (themeVariant) {
    case ThemeVariant.AtB:
      return AtBThemes;
    case ThemeVariant.Nfk:
      return NfkThemes;
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
