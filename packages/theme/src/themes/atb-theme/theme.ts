import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';

export const textColors = {
  light: '#FFFFFF',
  dark: '#000000',
  // secondary: '#00000060',
  // disabled: '#00000020',
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
  gray_400: contrastColor('#8D9398', 'dark'),
  gray_500: contrastColor('#6F777D', 'dark'),
  gray_600: contrastColor('#555E65', 'light'),
  gray_700: contrastColor('#37424A', 'light'),
  gray_800: contrastColor('#2B343A', 'light'),
  gray_850: contrastColor('#242B30', 'light'),
  gray_900: contrastColor('#1A2024', 'light'),
  gray_950: contrastColor('#101315', 'light'),
  gray_1000: contrastColor('#000000', 'light'),

  // green
  green_100: contrastColor('#E5E8B8', 'dark'),
  green_200: contrastColor('#C9CF6B', 'dark'),
  green_300: contrastColor('#A2AD00', 'dark'),
  green_400: contrastColor('#909A00', 'dark'),
  green_500: contrastColor('#757D00', 'dark'),
  green_600: contrastColor('#5B6100', 'light'),
  green_700: contrastColor('#464A00', 'light'),
  green_800: contrastColor('#323600', 'light'),
  green_900: contrastColor('#1F2100', 'light'),

  // blue
  blue_100: contrastColor('#D4E9EC', 'dark'),
  blue_200: contrastColor('#A6D1D9', 'dark'),
  blue_300: contrastColor('#75B8C4', 'dark'),
  blue_400: contrastColor('#429EAE', 'dark'),
  blue_500: contrastColor('#007C92', 'light'),
  blue_600: contrastColor('#006678', 'light'),
  blue_700: contrastColor('#004E5C', 'light'),
  blue_800: contrastColor('#003943', 'light'),
  blue_900: contrastColor('#002329', 'light'),

  // cyan
  cyan_100: contrastColor('#BFEDF1', 'dark'),
  cyan_200: contrastColor('#71D6E0', 'dark'),
  cyan_300: contrastColor('#62BAC3', 'dark'),
  cyan_400: contrastColor('#539CA4', 'dark'),
  cyan_500: contrastColor('#448086', 'dark'),
  cyan_600: contrastColor('#356569', 'light'),
  cyan_700: contrastColor('#294D51', 'light'),
  cyan_800: contrastColor('#1D383A', 'light'),
  cyan_900: contrastColor('#122224', 'light'),

  // burgundy
  burgundy_100: contrastColor('#E8E3E6', 'dark'),
  burgundy_200: contrastColor('#D0C7CE', 'dark'),
  burgundy_300: contrastColor('#B7A9B3', 'dark'),
  burgundy_400: contrastColor('#A08E9B', 'dark'),
  burgundy_500: contrastColor('#867080', 'dark'),
  burgundy_600: contrastColor('#6F5468', 'light'),
  burgundy_700: contrastColor('#5B3C53', 'light'),
  burgundy_800: contrastColor('#4B2942', 'light'),
  burgundy_900: contrastColor('#2C1827', 'light'),

  // orange
  orange_100: contrastColor('#F5E1D4', 'dark'),
  orange_200: contrastColor('#EAC1A5', 'dark'),
  orange_300: contrastColor('#DEA076', 'dark'),
  orange_400: contrastColor('#D27C41', 'dark'),
  orange_500: contrastColor('#C75B12', 'dark'),
  orange_600: contrastColor('#97450E', 'light'),
  orange_700: contrastColor('#73350A', 'light'),
  orange_800: contrastColor('#542608', 'light'),
  orange_900: contrastColor('#341805', 'light'),

  // yellow
  yellow_100: contrastColor('#F0E973', 'dark'),
  yellow_200: contrastColor('#E4D700', 'dark'),
  yellow_300: contrastColor('#C6AE00', 'dark'),
  yellow_400: contrastColor('#AF9000', 'dark'),
  yellow_500: contrastColor('#977000', 'dark'),
  yellow_600: contrastColor('#815200', 'light'),
  yellow_700: contrastColor('#6F3A00', 'light'),
  yellow_800: contrastColor('#5C2000', 'light'),
  yellow_900: contrastColor('#460200', 'light'),

  // red
  red_100: contrastColor('#EED2DB', 'dark'),
  red_200: contrastColor('#E4B8C6', 'dark'),
  red_300: contrastColor('#D691A7', 'dark'),
  red_400: contrastColor('#C76B89', 'dark'),
  red_500: contrastColor('#B74166', 'dark'),
  red_600: contrastColor('#A51140', 'light'),
  red_700: contrastColor('#7D0D31', 'light'),
  red_800: contrastColor('#5C0A24', 'light'),
  red_900: contrastColor('#380616', 'light'),
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
        default: baseColors.blue_500,
        hover: baseColors.blue_600,
        active: baseColors.blue_200,
        disabled: baseColors.blue_100,
        outline: baseColors.cyan_200,
      },
      interactive_1: {
        default: baseColors.gray_600,
        hover: baseColors.gray_500,
        active: baseColors.gray_900,
        disabled: baseColors.gray_200,
        outline: baseColors.blue_500,
      },
      interactive_2: {
        default: baseColors.gray_0,
        hover: baseColors.blue_100,
        active: baseColors.blue_200,
        disabled: baseColors.gray_0,
        outline: baseColors.blue_500,
      },
      interactive_3: {
        default: baseColors.green_300,
        hover: baseColors.green_200,
        active: baseColors.green_700,
        disabled: baseColors.green_100,
        outline: baseColors.blue_500,
      },
      interactive_destructive: {
        default: baseColors.red_600,
        hover: baseColors.red_500,
        active: baseColors.red_900,
        disabled: baseColors.red_100,
        outline: baseColors.blue_500,
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
        background_accent_2: baseColors.blue_100,
        background_accent_3: baseColors.blue_500,
        background_accent_4: baseColors.green_100,
      },
      transport: {
        transport_city: baseColors.green_300,
        transport_region: baseColors.blue_500,
        transport_boat: baseColors.cyan_200,
        transport_train: baseColors.burgundy_800,
        transport_airport: baseColors.orange_500,
        transport_plane: baseColors.orange_500,
        transport_other: baseColors.gray_600,
      },
      status: {
        valid: baseColors.green_300,
        info: baseColors.cyan_200,
        warning: baseColors.yellow_200,
        error: baseColors.red_600,
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
      primary: baseColors.gray_50.background,
      secondary: colors.text.dark,
      focus: baseColors.blue_500.background,
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
        hover: baseColors.blue_600,
        active: baseColors.blue_200,
        disabled: baseColors.blue_100,
        outline: baseColors.cyan_200,
      },
      interactive_1: {
        default: baseColors.gray_600,
        hover: baseColors.gray_500,
        active: baseColors.gray_900,
        disabled: baseColors.gray_200,
        outline: baseColors.blue_500,
      },
      interactive_2: {
        default: baseColors.gray_1000,
        hover: baseColors.blue_900,
        active: baseColors.blue_700,
        disabled: baseColors.gray_1000,
        outline: baseColors.blue_500,
      },
      interactive_3: {
        default: baseColors.green_300,
        hover: baseColors.green_200,
        active: baseColors.green_700,
        disabled: baseColors.green_100,
        outline: baseColors.blue_500,
      },
      interactive_destructive: {
        default: baseColors.red_600,
        hover: baseColors.red_500,
        active: baseColors.red_900,
        disabled: baseColors.red_100,
        outline: baseColors.blue_500,
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
        background_accent_2: baseColors.blue_100,
        background_accent_3: baseColors.blue_500,
        background_accent_4: baseColors.green_100,
      },

      transport: {
        transport_city: baseColors.green_300,
        transport_region: baseColors.blue_500,
        transport_boat: baseColors.cyan_200,
        transport_train: baseColors.burgundy_800,
        transport_airport: baseColors.orange_500,
        transport_plane: baseColors.orange_500,
        transport_other: baseColors.gray_600,
      },
      status: {
        valid: baseColors.green_300,
        info: baseColors.cyan_200,
        warning: baseColors.yellow_200,
        error: baseColors.red_600,
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
      focus: baseColors.cyan_500.background,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
