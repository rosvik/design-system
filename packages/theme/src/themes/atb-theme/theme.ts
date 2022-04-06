import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';
import hexToRgba from 'hex-to-rgba';

export const backgrounds = {
  light: {
    level0: '#FFFFFF',
    level1: '#F1F2F2',
    level2: '#E3E5E6',
    level3: '#D5D7D9',
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
  base: {
    // gray
    gray_50: '#F1F2F2',
    gray_100: '#E3E5E6',
    gray_150: '#D5D7D9',
    gray_200: '#C7CACC',
    gray_300: '#A9AEB1',
    gray_400: '#8D9398',
    gray_500: '#6F777D',
    gray_600: '#555E65',
    gray_700: '#37424A',
    gray_800: '#2B343A',
    gray_850: '#242B30',
    gray_900: '#1A2024',
    gray_950: '#101315',

    // green
    green_100: '#E5E8B8',
    green_200: '#C9CF6B',
    green_300: '#A2AD00',
    green_400: '#909A00',
    green_500: '#757D00',
    green_600: '#5B6100',
    green_700: '#464A00',
    green_800: '#323600',
    green_900: '#1F2100',

    // blue
    blue_100: '#D4E9EC',
    blue_200: '#A6D1D9',
    blue_300: '#75B8C4',
    blue_400: '#429EAE',
    blue_500: '#007C92',
    blue_600: '#006678',
    blue_700: '#004E5C',
    blue_800: '#003943',
    blue_900: '#002329',

    // cyan
    cyan_100: '#BFEDF1',
    cyan_200: '#71D6E0',
    cyan_300: '#62BAC3',
    cyan_400: '#539CA4',
    cyan_500: '#448086',
    cyan_600: '#356569',
    cyan_700: '#294D51',
    cyan_800: '#1D383A',
    cyan_900: '#122224',

    // burgundy
    burgundy_100: '#E8E3E6',
    burgundy_200: '#D0C7CE',
    burgundy_300: '#B7A9B3',
    burgundy_400: '#A08E9B',
    burgundy_500: '#867080',
    burgundy_600: '#6F5468',
    burgundy_700: '#5B3C53',
    burgundy_800: '#4B2942',
    burgundy_900: '#2C1827',

    // orange
    orange_100: '#F5E1D4',
    orange_200: '#EAC1A5',
    orange_300: '#DEA076',
    orange_400: '#D27C41',
    orange_500: '#C75B12',
    orange_600: '#97450E',
    orange_700: '#73350A',
    orange_800: '#542608',
    orange_900: '#341805',

    // yellow
    yellow_100: '#F0E973',
    yellow_200: '#E4D700',
    yellow_300: '#C6AE00',
    yellow_400: '#AF9000',
    yellow_500: '#977000',
    yellow_600: '#815200',
    yellow_700: '#6F3A00',
    yellow_800: '#5C2000',
    yellow_900: '#460200',

    // red
    red_100: '#EED2DB',
    red_200: '#E4B8C6',
    red_300: '#D691A7',
    red_400: '#C76B89',
    red_500: '#B74166',
    red_600: '#A51140',
    red_700: '#7D0D31',
    red_800: '#5C0A24',
    red_900: '#380616',
  },
  text: {
    light: '#FFFFFF',
    dark: '#000000',
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
      background_accent: contrastColor(colors.base.gray_700, 'light'),
      primary_1: contrastColor(colors.base.green_300, 'dark'),
      primary_2: contrastColor(colors.base.blue_500, 'light'),
      primary_3: contrastColor(colors.base.blue_100, 'dark'),
      primary_destructive: contrastColor(colors.base.red_600, 'light'),
      secondary_1: contrastColor(colors.base.gray_700, 'light'),
      secondary_2: contrastColor(colors.white, 'dark'),
      secondary_3: contrastColor(colors.base.gray_600, 'light'),
      secondary_4: contrastColor(colors.base.gray_50, 'dark'),

      transport_city: contrastColor(colors.base.green_300, 'dark'),
      transport_region: contrastColor(colors.base.blue_500, 'light'),
      transport_boat: contrastColor(colors.base.cyan_200, 'dark'),
      transport_train: contrastColor(colors.base.burgundy_800, 'light'),
      transport_airport: contrastColor(colors.base.orange_500, 'light'),
      transport_plane: contrastColor(colors.base.orange_500, 'light'),
      transport_other: contrastColor(colors.base.gray_600, 'light'),
    },

    content: {
      subtle_primary: contrastColor(colors.base.gray_50, 'dark'),
    },

    status: {
      valid: {
        main: contrastColor(colors.base.green_300, 'dark'),
      },
      info: {
        main: contrastColor(colors.base.cyan_200, 'dark'),
      },
      warning: {
        main: contrastColor(colors.base.yellow_200, 'dark'),
      },
      error: {
        main: contrastColor(colors.base.red_600, 'light'),
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
      primary: backgrounds.light.level1,
      secondary: colors.text.dark,
      focus: colors.base.blue_500,
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
      background_accent: contrastColor(colors.base.gray_700, 'light'),
      primary_1: contrastColor(colors.base.green_300, 'dark'),
      primary_2: contrastColor(colors.base.blue_500, 'light'),
      primary_3: contrastColor(colors.base.blue_100, 'dark'),
      primary_destructive: contrastColor(colors.base.red_600, 'light'),
      secondary_1: contrastColor(colors.base.gray_300, 'dark'),
      secondary_2: contrastColor(colors.black, 'light'),
      secondary_3: contrastColor(colors.base.gray_600, 'light'),
      secondary_4: contrastColor(colors.base.gray_600, 'light'),

      transport_city: contrastColor(colors.base.green_300, 'dark'),
      transport_region: contrastColor(colors.base.blue_500, 'light'),
      transport_boat: contrastColor(colors.base.cyan_200, 'dark'),
      transport_train: contrastColor(colors.base.burgundy_800, 'light'),
      transport_airport: contrastColor(colors.base.orange_500, 'light'),
      transport_plane: contrastColor(colors.base.orange_500, 'light'),
      transport_other: contrastColor(colors.base.gray_600, 'light'),
    },
    content: {
      subtle_primary: contrastColor(colors.base.gray_850, 'dark'),
    },
    status: {
      valid: {
        main: contrastColor(colors.base.green_300, 'dark'),
      },
      info: {
        main: contrastColor(colors.base.cyan_200, 'dark'),
      },
      warning: {
        main: contrastColor(colors.base.yellow_200, 'dark'),
      },
      error: {
        main: contrastColor(colors.base.red_600, 'light'),
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
      primary: backgrounds.dark.level1,
      secondary: colors.text.light,
      focus: colors.base.cyan_500,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
