import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';
import hexToRgba from 'hex-to-rgba';
import {backgrounds, colors} from './colors';

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