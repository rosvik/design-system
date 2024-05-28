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
  gray_500: contrastColor('#6F777D', 'light'),
  gray_600: contrastColor('#555E65', 'light'),
  gray_700: contrastColor('#37424A', 'light'),
  gray_800: contrastColor('#2B343A', 'light'),
  gray_850: contrastColor('#242B30', 'light'),
  gray_900: contrastColor('#1A2024', 'light'),
  gray_950: contrastColor('#101315', 'light'),
  gray_1000: contrastColor('#000000', 'light'),

  // green
  green_100: contrastColor('#F7FFF4', 'dark'),
  green_200: contrastColor('#F3FFEE', 'dark'),
  green_300: contrastColor('#E7FFDD', 'dark'),
  green_400: contrastColor('#B2FF90', 'dark'),
  green_500: contrastColor('#8ECC73', 'dark'),
  green_600: contrastColor('#86BF6C', 'dark'),
  green_700: contrastColor('#6B9956', 'dark'),
  green_800: contrastColor('#507341', 'light'),
  green_900: contrastColor('#3E5932', 'light'),

  // blue
  blue_50: contrastColor('#E6E9F9', 'dark'),
  blue_100: contrastColor('#B0BAEC', 'dark'),
  blue_200: contrastColor('#8A98E3', 'dark'),
  blue_300: contrastColor('#546AD6', 'light'),
  blue_400: contrastColor('#334DCE', 'light'),
  blue_500: contrastColor('#0020C2', 'light'),
  blue_600: contrastColor('#001DB1', 'light'),
  blue_700: contrastColor('#00178A', 'light'),
  blue_800: contrastColor('#00126B', 'light'),
  blue_900: contrastColor('#000D51', 'light'),

  // cyan
  cyan_50: contrastColor('#F2FEFF', 'dark'),
  cyan_100: contrastColor('#ECFEFF', 'dark'),
  cyan_200: contrastColor('#D7FDFF', 'dark'),
  cyan_300: contrastColor('#7FF9FF', 'dark'),
  cyan_400: contrastColor('#72E0E6', 'dark'),
  cyan_500: contrastColor('#66C7CC', 'dark'),
  cyan_600: contrastColor('#5FBBBF', 'light'),
  cyan_700: contrastColor('#4C9599', 'light'),
  cyan_800: contrastColor('#397073', 'light'),
  cyan_900: contrastColor('#2C5759', 'light'),

  // burgundy
  burgundy_100: contrastColor('#FDECF6', 'dark'),
  burgundy_200: contrastColor('#FCE3F2', 'dark'),
  burgundy_300: contrastColor('#F9C5E3', 'dark'),
  burgundy_400: contrastColor('#EC43A6', 'dark'),
  burgundy_500: contrastColor('#D43C95', 'dark'),
  burgundy_600: contrastColor('#B1327D', 'light'),
  burgundy_700: contrastColor('#8E2864', 'light'),
  burgundy_800: contrastColor('#6A1E4B', 'light'),
  burgundy_900: contrastColor('#53173A', 'light'),

  // orange
  orange_50: contrastColor('#FDEEE7', 'dark'),
  orange_100: contrastColor('#F8CCB5', 'dark'),
  orange_200: contrastColor('#F4B392', 'dark'),
  orange_300: contrastColor('#F09060', 'dark'),
  orange_400: contrastColor('#E85912', 'dark'),
  orange_500: contrastColor('#D24600', 'light'),
  orange_600: contrastColor('#BF4000', 'light'),
  orange_700: contrastColor('#953200', 'light'),
  orange_800: contrastColor('#742700', 'light'),
  orange_900: contrastColor('#4F1E06', 'light'),
  orange_950: contrastColor('#401805', 'light'),
  orange_1000: contrastColor('#301204', 'light'),

  // yellow
  yellow_50: contrastColor('#FFFDE9', 'dark'),
  yellow_100: contrastColor('#FFFCDE', 'dark'),
  yellow_200: contrastColor('#FFF8BB', 'dark'),
  yellow_300: contrastColor('#FFE924', 'dark'),
  yellow_400: contrastColor('#E6D220', 'dark'),
  yellow_500: contrastColor('#CCBA1D', 'dark'),
  yellow_600: contrastColor('#BFAF1B', 'dark'),
  yellow_700: contrastColor('#998C16', 'light'),
  yellow_800: contrastColor('#736910', 'light'),
  yellow_900: contrastColor('#59520D', 'light'),

  // red
  red_50: contrastColor('#FAE8E8', 'dark'),
  red_100: contrastColor('#EEB7B7', 'dark'),
  red_200: contrastColor('#E69495', 'dark'),
  red_300: contrastColor('#DB6364', 'dark'),
  red_400: contrastColor('#D44546', 'dark'),
  red_500: contrastColor('#C91618', 'light'),
  red_600: contrastColor('#B71416', 'light'),
  red_700: contrastColor('#8F1011', 'light'),
  red_800: contrastColor('#6F0C0D', 'light'),
  red_900: contrastColor('#54090A', 'light'),
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
    level0: baseColors.gray_900,
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
        default: baseColors.orange_900,
        hover: baseColors.orange_800,
        active: baseColors.orange_200,
        disabled: baseColors.orange_100,
        outline: baseColors.orange_900,
        destructive: baseColors.red_600,
      },
      interactive_1: {
        default: baseColors.orange_700,
        hover: baseColors.orange_600,
        active: baseColors.orange_800,
        disabled: baseColors.gray_200,
        outline: baseColors.orange_900,
        destructive: baseColors.red_600,
      },
      interactive_2: {
        default: baseColors.gray_0,
        hover: baseColors.orange_300,
        active: baseColors.orange_200,
        disabled: baseColors.gray_100,
        outline: baseColors.orange_600,
        destructive: baseColors.red_600,
      },
      interactive_3: {
        default: baseColors.orange_100,
        hover: baseColors.orange_200,
        active: baseColors.orange_200,
        disabled: baseColors.gray_100,
        outline: baseColors.orange_500,
        destructive: baseColors.red_600,
      },
      interactive_destructive: {
        default: baseColors.red_600,
        hover: baseColors.red_700,
        active: baseColors.red_700,
        disabled: baseColors.red_100,
        outline: baseColors.blue_900,
        destructive: baseColors.red_600,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.green_700,
        secondary: baseColors.green_800,
      },
      transport_region: {
        primary: baseColors.blue_400,
        secondary: baseColors.blue_400,
      },
      transport_airport_express: {
        primary: baseColors.red_400,
        secondary: baseColors.red_500,
      },
      transport_boat: {
        primary: baseColors.cyan_700,
        secondary: baseColors.cyan_800,
      },
      transport_train: {
        primary: baseColors.burgundy_500,
        secondary: baseColors.burgundy_700,
      },
      transport_airport: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_plane: {
        primary: baseColors.gray_800,
        secondary: baseColors.gray_900,
      },
      transport_flexible: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_bike: {
        primary: baseColors.red_700,
        secondary: baseColors.red_800,
      },
      transport_scooter: {
        primary: baseColors.green_700,
        secondary: baseColors.green_800,
      },
      transport_car: {
        primary: baseColors.burgundy_700,
        secondary: baseColors.burgundy_800,
      },
      transport_other: {
        primary: baseColors.gray_700,
        secondary: baseColors.gray_800,
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_0,
        background_1: baseColors.gray_50,
        background_2: baseColors.gray_100,
        background_3: baseColors.gray_150,
        background_accent_0: baseColors.orange_500,
        background_accent_1: baseColors.gray_600,
        background_accent_2: baseColors.orange_200,
        background_accent_3: baseColors.orange_400,
        background_accent_4: baseColors.yellow_300,
        background_accent_5: baseColors.orange_300,
      },
      status: {
        valid: {
          primary: baseColors.green_700,
          secondary: baseColors.green_700,
        },
        info: {
          primary: baseColors.blue_300,
          secondary: baseColors.blue_300,
        },
        warning: {
          primary: baseColors.yellow_400,
          secondary: baseColors.yellow_400,
        },
        error: {
          primary: baseColors.red_300,
          secondary: baseColors.red_300,
        },
      },
      zone_selection: {
        from: baseColors.green_300,
        to: baseColors.cyan_200,
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
      focus: baseColors.orange_400.background,
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
        default: baseColors.orange_500,
        hover: baseColors.red_600,
        active: baseColors.red_800,
        disabled: baseColors.orange_200,
        outline: baseColors.orange_600,
        destructive: baseColors.red_300,
      },
      interactive_1: {
        default: baseColors.orange_950,
        hover: baseColors.gray_500,
        active: baseColors.gray_900,
        disabled: baseColors.gray_200,
        outline: baseColors.orange_900,
        destructive: baseColors.red_300,
      },
      interactive_2: {
        default: baseColors.gray_900,
        hover: baseColors.orange_1000,
        active: baseColors.orange_800,
        disabled: baseColors.gray_950,
        outline: baseColors.orange_600,
        destructive: baseColors.red_300,
      },
      interactive_3: {
        default: baseColors.orange_1000,
        hover: baseColors.orange_900,
        active: baseColors.orange_800,
        disabled: baseColors.gray_700,
        outline: baseColors.orange_900,
        destructive: baseColors.red_600,
      },
      interactive_destructive: {
        default: baseColors.red_700,
        hover: baseColors.red_600,
        active: baseColors.red_600,
        disabled: baseColors.red_100,
        outline: baseColors.red_900,
        destructive: baseColors.red_300,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.green_700,
        secondary: baseColors.green_800,
      },
      transport_region: {
        primary: baseColors.blue_400,
        secondary: baseColors.blue_400,
      },
      transport_airport_express: {
        primary: baseColors.red_400,
        secondary: baseColors.red_500,
      },
      transport_boat: {
        primary: baseColors.cyan_700,
        secondary: baseColors.cyan_800,
      },
      transport_train: {
        primary: baseColors.burgundy_500,
        secondary: baseColors.burgundy_700,
      },
      transport_airport: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_plane: {
        primary: baseColors.gray_800,
        secondary: baseColors.gray_900,
      },
      transport_flexible: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_bike: {
        primary: baseColors.red_700,
        secondary: baseColors.red_800,
      },
      transport_scooter: {
        primary: baseColors.green_700,
        secondary: baseColors.green_800,
      },
      transport_car: {
        primary: baseColors.burgundy_700,
        secondary: baseColors.burgundy_800,
      },
      transport_other: {
        primary: baseColors.gray_200,
        secondary: baseColors.gray_400,
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_900,
        background_1: baseColors.gray_850,
        background_2: baseColors.gray_700,
        background_3: baseColors.gray_600,
        background_accent_0: baseColors.gray_1000,
        background_accent_1: baseColors.gray_600,
        background_accent_2: baseColors.orange_200,
        background_accent_3: baseColors.orange_400,
        background_accent_4: baseColors.yellow_300,
        background_accent_5: baseColors.orange_300,
      },

      status: {
        valid: {
          primary: baseColors.green_700,
          secondary: baseColors.green_700,
        },
        info: {
          primary: baseColors.blue_300,
          secondary: baseColors.blue_300,
        },
        warning: {
          primary: baseColors.yellow_400,
          secondary: baseColors.yellow_400,
        },
        error: {
          primary: baseColors.red_300,
          secondary: baseColors.red_300,
        },
      },
      zone_selection: {
        from: baseColors.green_300,
        to: baseColors.cyan_200,
      },
    },
    text: {
      colors: {
        primary: baseColors.gray_0.background,
        secondary: baseColors.gray_100.background,
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
