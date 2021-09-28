import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';
import hexToRgba from 'hex-to-rgba';

export const backgrounds = {
  light: {
    level0: '#FFFFFF',
    level1: '#E7E8E9',
    level2: '#DBDDDE',
    level3: '#CFD2D3',
  },
  dark: {
    level0: '#000000',
    level1: '#242B30',
    level2: '#37424A',
    level3: '#555E65',
  },
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: {
    // grays
    gray_50: '#E7E8E9',
    gray_100: '#F5F5F6',
    gray_200: '#AFB3B7',
    gray_300: '#878E92',
    gray_400: '#5F686E',
    gray_500: '#37424A',
    gray_600: '#2C353B',
    gray_700: '#21282C',
    gray_800: '#161A1E',
    gray_900: '#101416',
    gray_950: '#1B1C1D',
    // greens
    green_100: '#E3E6B3',
    green_200: '#DADE99',
    green_300: '#C7CE66',
    green_400: '#B5BD33',
    green_500: '#A2AD00',
    green_600: '#828A00',
    green_700: '#616800',
    green_800: '#414500',
    green_900: '#313400',
  },
  secondary: {
    // cyan
    cyan_100: '#D4F3F6',
    cyan_200: '#C6EFF3',
    cyan_300: '#AAE6EC',
    cyan_400: '#8DDEE6',
    cyan_500: '#71D6E0',
    cyan_600: '#5AABB3',
    cyan_700: '#448086',
    cyan_800: '#2D565A',
    cyan_900: '#224043',
    // i got the blues
    blue_100: '#B3D8DE',
    blue_200: '#99CBD3',
    blue_300: '#66B0BE',
    blue_400: '#3396A8',
    blue_500: '#007C92',
    blue_600: '#006375',
    blue_700: '#004A58',
    blue_800: '#00323A',
    blue_900: '#00252C',

    brown: '#584528',

    orange: '#C75B12',

    yellow_100: '#F7F3B2',
    yellow_500: '#E4D700',

    red_100: '#E4B8C6',
    red_400: '#B74166',
    red_500: '#A51140',
  },
  text: {
    light: '#FFFFFF',
    dark: '#000000',
  },
  other: {
    orange_500: '#BE5604',
    ekspressen_500: '#ED6C05',
    ekspressen_600: '#C75B12',
  },
};

const contrastColor = (
  backgroundColor: string = colors.white,
  textColorType: TextColorType = 'dark',
): ContrastColor => {
  return {backgroundColor, color: colors.text[textColorType], textColorType};
};

const themes: Themes = {
  light: {
    spacings: spacings,
    colors: {
      background_0: contrastColor(backgrounds.light.level0, 'dark'),
      background_1: contrastColor(backgrounds.light.level1, 'dark'),
      background_2: contrastColor(backgrounds.light.level2, 'dark'),
      background_3: contrastColor(backgrounds.light.level3, 'dark'),
      background_accent: contrastColor(colors.primary.gray_500, 'light'),
      primary_1: contrastColor(colors.primary.green_500, 'dark'),
      primary_2: contrastColor(colors.secondary.blue_500, 'light'),
      primary_3: contrastColor(colors.secondary.cyan_500, 'dark'),
      primary_destructive: contrastColor(colors.secondary.red_500, 'light'),
      secondary_1: contrastColor(colors.primary.gray_500, 'light'),
      secondary_2: contrastColor(colors.primary.gray_200, 'dark'),
      secondary_3: contrastColor(colors.primary.gray_400, 'light'),
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
        main: contrastColor(colors.secondary.cyan_500, 'dark'),
        bg: contrastColor(hexToRgba(colors.secondary.cyan_500, 0.25), 'dark'),
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
      colors: {
        primary: colors.text.dark,
        secondary: hexToRgba(colors.text.dark, 0.6),
        disabled: hexToRgba(colors.text.dark, 0.2),
      },
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
      background_accent: contrastColor(colors.primary.gray_500, 'light'),
      primary_1: contrastColor(colors.primary.green_500, 'dark'),
      primary_2: contrastColor(colors.secondary.blue_500, 'light'),
      primary_3: contrastColor(colors.secondary.cyan_500, 'dark'),
      primary_destructive: contrastColor(colors.secondary.red_500, 'light'),
      secondary_1: contrastColor(colors.primary.gray_50, 'dark'),
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
      colors: {
        primary: colors.text.light,
        secondary: hexToRgba(colors.text.light, 0.6),
        disabled: hexToRgba(colors.text.light, 0.2),
      },
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

export default themes;
