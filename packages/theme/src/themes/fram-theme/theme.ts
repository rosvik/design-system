import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';

export const textColors = {
  light: '#FFFFFF',
  dark: '#000000',
};

const contrastColor = (
  background: string,
  textColorType: TextColorType = 'dark',
): ContrastColor => {
  return {
    background,
    text: textColors[textColorType],
  };
};

export const baseColors = {
  // gray
  gray_0: contrastColor('#FFFFFF', 'dark'),
  gray_50: contrastColor('#F1F2F2', 'dark'),
  gray_100: contrastColor('#E3E5E6', 'dark'),
  gray_150: contrastColor('#D5D7D9', 'dark'),
  gray_200: contrastColor('#C7CACC', 'dark'),
  gray_300: contrastColor('#A9AEB1', 'dark'),
  gray_500: contrastColor('#6F777D', 'dark'),
  gray_600: contrastColor('#555E65', 'light'),
  gray_700: contrastColor('#37424A', 'light'),
  gray_800: contrastColor('#2B343A', 'light'),
  gray_850: contrastColor('#242B30', 'light'),
  gray_900: contrastColor('#1A2024', 'light'),
  gray_1000: contrastColor('#000000', 'light'),

  // blue
  blue_100: contrastColor('#D4E9EC', 'dark'),
  blue_200: contrastColor('#AAC6D8', 'dark'),
  blue_400: contrastColor('#A6D1D9', 'dark'),
  blue_500: contrastColor('#76A4C0', 'dark'),
  blue_600: contrastColor('#007FBA', 'light'),
  blue_700: contrastColor('#005685', 'light'),
  blue_900: contrastColor('#002329', 'light'),

  // cyan
  cyan_100: contrastColor('#CDE9E3', 'dark'),
  cyan_200: contrastColor('#679C9F', 'dark'),
  cyan_300: contrastColor('#0D6569', 'light'),
  cyan_400: contrastColor('#0b585c', 'light'),

  // green
  green_100: contrastColor('#D8E4D3', 'dark'),
  green_200: contrastColor('#B8D4A2', 'dark'),
  green_300: contrastColor('#82B962', 'dark'),
  green_400: contrastColor('#284320', 'light'),

  // burgundy
  burgundy_100: contrastColor('#551125', 'light'),

  // orange
  orange_100: contrastColor('#F15629', 'light'),

  // red
  red_100: contrastColor('#FFFFFF', 'dark'), // TODO: Get correct color from scheme
  red_200: contrastColor('#EFB8B2', 'dark'),
  red_300: contrastColor('#F18176', 'dark'),
  red_400: contrastColor('#551125', 'light'),

  // yellow
  yellow_100: contrastColor('#F0E991', 'dark'),
  yellow_200: contrastColor('#FBDC00', 'dark'),
};

export const colors = {
  white: baseColors.gray_0.background,
  black: baseColors.gray_1000.background,
  text: {
    light: baseColors.gray_0.background,
    dark: baseColors.gray_1000.background,
  },
};

export const backgrounds = {
  light: {
    level0: baseColors.gray_0,
    level1: baseColors.gray_50,
    level2: baseColors.gray_100,
    level3: baseColors.gray_150,
  },
  dark: {
    level0: baseColors.gray_1000,
    level1: baseColors.gray_850,
    level2: baseColors.gray_700,
    level3: baseColors.gray_600,
  },
};

const themes: Themes = {
  light: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: baseColors.blue_700,
        hover: baseColors.blue_600,
        active: baseColors.cyan_100,
        disabled: baseColors.gray_200,
        outline: baseColors.cyan_300,
      },
      interactive_1: {
        default: baseColors.gray_600,
        hover: baseColors.gray_500,
        active: baseColors.gray_900,
        disabled: baseColors.gray_200,
        outline: baseColors.blue_700,
      },
      interactive_2: {
        default: baseColors.gray_0,
        hover: baseColors.blue_100,
        active: baseColors.blue_400,
        disabled: baseColors.gray_0,
        outline: baseColors.blue_700,
      },
      interactive_3: {
        default: baseColors.green_300,
        hover: baseColors.green_200,
        active: baseColors.green_400,
        disabled: baseColors.green_100,
        outline: baseColors.blue_700,
      },
      interactive_destructive: {
        default: baseColors.red_300,
        hover: baseColors.red_200,
        active: baseColors.red_400,
        disabled: baseColors.red_100,
        outline: baseColors.blue_700,
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_0,
        background_1: baseColors.gray_50,
        background_2: baseColors.gray_100,
        background_3: baseColors.gray_150,
        background_accent_0: baseColors.gray_700,
        background_accent_1: baseColors.gray_600,
        background_accent_2: baseColors.cyan_100,
        background_accent_3: baseColors.cyan_300,
        background_accent_4: baseColors.yellow_100,
        background_accent_5: baseColors.blue_400,
      },
      transport: {
        transport_city: baseColors.green_300,
        transport_region: baseColors.blue_700,
        transport_boat: baseColors.blue_600,
        transport_train: baseColors.burgundy_100,
        transport_airport: baseColors.orange_100,
        transport_plane: baseColors.orange_100,
        transport_other: baseColors.gray_600,
      },
      status: {
        valid: baseColors.green_300,
        info: baseColors.blue_700,
        warning: baseColors.yellow_200,
        error: baseColors.orange_100,
      },
    },

    text: {
      colors: {
        primary: baseColors.gray_1000.background,
        secondary: baseColors.gray_600.background,
        disabled: baseColors.gray_300.background,
      },
    },
    border: {
      primary: baseColors.gray_50.background, // Not defined in color scheme
      secondary: colors.text.dark, // Not defined in color scheme
      focus: baseColors.blue_700.background, // Not defined in color scheme
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
  dark: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: baseColors.blue_500,
        hover: baseColors.blue_200,
        active: baseColors.cyan_100,
        disabled: baseColors.gray_200,
        outline: baseColors.cyan_300,
      },
      interactive_1: {
        default: baseColors.gray_600,
        hover: baseColors.gray_500,
        active: baseColors.gray_900,
        disabled: baseColors.gray_200,
        outline: baseColors.blue_700,
      },
      interactive_2: {
        default: baseColors.gray_1000,
        hover: baseColors.cyan_300,
        active: baseColors.cyan_200,
        disabled: baseColors.gray_200,
        outline: baseColors.blue_700,
      },
      interactive_3: {
        default: baseColors.green_300,
        hover: baseColors.green_200,
        active: baseColors.green_400,
        disabled: baseColors.green_100,
        outline: baseColors.blue_700,
      },
      interactive_destructive: {
        default: baseColors.red_300,
        hover: baseColors.red_200,
        active: baseColors.red_400,
        disabled: baseColors.red_100,
        outline: baseColors.blue_700,
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_1000,
        background_1: baseColors.gray_850,
        background_2: baseColors.gray_700,
        background_3: baseColors.gray_600,
        background_accent_0: baseColors.gray_700,
        background_accent_1: baseColors.gray_600,
        background_accent_2: baseColors.cyan_100,
        background_accent_3: baseColors.cyan_300,
        background_accent_4: baseColors.yellow_100,
        background_accent_5: baseColors.gray_800,
      },

      transport: {
        transport_city: baseColors.green_300,
        transport_region: baseColors.blue_700,
        transport_boat: baseColors.blue_600,
        transport_train: baseColors.burgundy_100,
        transport_airport: baseColors.orange_100,
        transport_plane: baseColors.orange_100,
        transport_other: baseColors.gray_600,
      },
      status: {
        valid: baseColors.green_300,
        info: baseColors.blue_700,
        warning: baseColors.yellow_200,
        error: baseColors.orange_100,
      },
    },
    text: {
      colors: {
        primary: baseColors.gray_0.background,
        secondary: baseColors.gray_50.background,
        disabled: baseColors.gray_300.background,
      },
    },
    border: {
      primary: baseColors.gray_850.background,
      secondary: baseColors.gray_0.background,
      focus: baseColors.cyan_100.background, // Not defined in color scheme
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
