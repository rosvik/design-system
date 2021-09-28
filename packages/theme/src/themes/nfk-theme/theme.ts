import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';
import hexToRgba from 'hex-to-rgba';

const colors = {
  white: '#ffffff',
  black: '#000000',
  text: {
    light: '#FFFFFF',
    dark: '#003441',
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
      background_0: contrastColor('#FFFFFF', 'dark'),
      background_1: contrastColor('#F0F0F0', 'dark'),
      background_2: contrastColor('#EAEAEA', 'dark'),
      background_3: contrastColor('#E4E4E4', 'dark'),
      background_accent: contrastColor('#003441', 'light'),
      primary_1: contrastColor('#80C0D1', 'dark'),
      primary_2: contrastColor('#0181A2', 'light'),
      primary_3: contrastColor('#99CDDA', 'dark'),
      primary_destructive: contrastColor('#A61419', 'light'),
      secondary_1: contrastColor('#003441', 'light'),
      secondary_2: contrastColor('#BCCBCF', 'dark'),
      secondary_3: contrastColor('#566569', 'light'),
      secondary_4: contrastColor('#DDE5E7', 'dark'),

      transport_city: contrastColor('#014D61', 'light'),
      transport_region: contrastColor('#6C7E2F', 'light'),
      transport_boat: contrastColor('#1777D7', 'light'),
      transport_train: contrastColor('#A5608A', 'light'),
      transport_airport: contrastColor('#8A62C3', 'light'),
      transport_plane: contrastColor('#318181', 'light'),
      transport_other: contrastColor('#717171', 'light'),
    },
    status: {
      valid: {
        main: contrastColor('#7FDABB', 'dark'),
      },
      info: {
        main: contrastColor('#99CDDA', 'dark'),
      },
      warning: {
        main: contrastColor('#FCBA63', 'dark'),
      },
      error: {
        main: contrastColor('#A61419', 'light'),
      },
    },
    text: {
      colors: {
        primary: colors.text.dark,
        secondary: hexToRgba(colors.text.dark, 0.7),
        disabled: hexToRgba(colors.text.dark, 0.52),
      },
    },
    border: {
      primary: '#E7E8E9',
      secondary: colors.text.dark,
      focus: '#007C92',
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
      background_0: contrastColor('#002731', 'light'),
      background_1: contrastColor('#000D10', 'light'),
      background_2: contrastColor('#003441', 'light'),
      background_3: contrastColor('#001A20', 'light'),
      background_accent: contrastColor('#000D10', 'light'),
      primary_1: contrastColor('#80C0D1', 'dark'),
      primary_2: contrastColor('#349AB5', 'light'),
      primary_3: contrastColor('#99CDDA', 'dark'),
      primary_destructive: contrastColor('#D51920', 'light'),
      secondary_1: contrastColor('#D2DDDF', 'dark'),
      secondary_2: contrastColor('#72878C', 'light'),
      secondary_3: contrastColor('#394446', 'light'),
      secondary_4: contrastColor('#566569', 'light'),

      transport_city: contrastColor('#80C0D1'),
      transport_region: contrastColor('#98A56D'),
      transport_boat: contrastColor('#5DA0E3'),
      transport_train: contrastColor('#C090AD'),
      transport_airport: contrastColor('#AD91D5'),
      transport_plane: contrastColor('#6FA7A7'),
      transport_other: contrastColor('#9C9C9C'),
    },
    status: {
      valid: {
        main: contrastColor('#7FDABB', 'dark'),
      },
      info: {
        main: contrastColor('#99CDDA', 'dark'),
      },
      warning: {
        main: contrastColor('#FCBA63', 'dark'),
      },
      error: {
        main: contrastColor('#BE161D', 'light'),
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
      primary: '#2C353B',
      secondary: colors.text.light,
      focus: '#71D6E0',
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
