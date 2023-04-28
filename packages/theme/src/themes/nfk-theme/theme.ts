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
  background: string = colors.white,
  textColorType: TextColorType = 'dark',
): ContrastColor => {
  return {
    background,
    text: colors.text[textColorType],
  };
};

const themes: Themes = {
  light: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: contrastColor('#046073', 'light'),
        hover: contrastColor('#0181A2', 'light'),
        active: contrastColor('#99CDDA', 'dark'),
        disabled: contrastColor('#99A7AB', 'light'),
        outline: contrastColor('#0181A2', 'dark'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_1: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#0181A2', 'light'),
        active: contrastColor('#99CDDA', 'dark'),
        disabled: contrastColor('#99A7AB', 'light'),
        outline: contrastColor('#0181A2', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_2: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#C5DFE6', 'dark'),
        active: contrastColor('#99CDDA', 'dark'),
        disabled: contrastColor('#E6F2F6', 'dark'),
        outline: contrastColor('#046073', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_3: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#FFFFFF', 'dark'),
        active: contrastColor('#FFFFFF', 'dark'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#FFFFFF', 'dark'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_destructive: {
        default: contrastColor('#A61419', 'light'),
        hover: contrastColor('#CA7275', 'light'),
        active: contrastColor('#531B22', 'light'),
        disabled: contrastColor('#EDD0D1', 'light'),
        outline: contrastColor('#021F28', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
    },
    static: {
      background: {
        background_0: contrastColor('#FFFFFF', 'dark'),
        background_1: contrastColor('#E6F2F6', 'dark'),
        background_2: contrastColor('#EAEAEA', 'dark'),
        background_3: contrastColor('#E4E4E4', 'dark'),
        background_accent_0: contrastColor('#0181A2', 'light'),
        background_accent_1: contrastColor('#046073', 'light'),
        background_accent_2: contrastColor('#C5DFE6', 'dark'),
        background_accent_3: contrastColor('#0181A2', 'light'),
        background_accent_4: contrastColor('#FFFFFF', 'dark'),
        background_accent_5: contrastColor('#FFFFFF', 'dark'),
      },
      transport: {
        transport_city: contrastColor('#014D61', 'light'),
        transport_region: contrastColor('#6C7E2F', 'light'),
        transport_airport_express: contrastColor('#6C7E2F', 'light'),
        transport_boat: contrastColor('#1777D7', 'light'),
        transport_train: contrastColor('#A5608A', 'light'),
        transport_airport: contrastColor('#8A62C3', 'light'),
        transport_plane: contrastColor('#318181', 'light'),
        transport_flexible: contrastColor('#717171', 'light'),
        transport_bike: contrastColor('#7D0D31', 'light'),
        transport_scooter: contrastColor('#464A00', 'light'),
        transport_other: contrastColor('#717171', 'light'),
      },
      status: {
        valid: contrastColor('#7FDABB', 'dark'),
        info: contrastColor('#99CDDA', 'dark'),
        warning: contrastColor('#FCBA63', 'dark'),
        error: contrastColor('#A61419', 'light'),
      },
      zone_selection: {
        from: contrastColor('#FF7E81', 'dark'),
        to: contrastColor('#FF282E', 'light'),
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
    interactive: {
      interactive_0: {
        default: contrastColor('#0181A2', 'light'),
        hover: contrastColor('#02414F', 'light'),
        active: contrastColor('#99CDDA', 'dark'),
        disabled: contrastColor('#99A7AB', 'light'),
        outline: contrastColor('#046073', 'dark'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_1: {
        default: contrastColor('#046073', 'light'),
        hover: contrastColor('#00303D', 'light'),
        active: contrastColor('#0181A2', 'light'),
        disabled: contrastColor('#99A7AB', 'light'),
        outline: contrastColor('#0181A2', 'light'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_2: {
        default: contrastColor('#046073', 'light'),
        hover: contrastColor('#02414F', 'light'),
        active: contrastColor('#00303D', 'light'),
        disabled: contrastColor('#00303D', 'light'),
        outline: contrastColor('#FFFFFF', 'dark'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_3: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#FFFFFF', 'dark'),
        active: contrastColor('#FFFFFF', 'dark'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#FFFFFF', 'dark'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_destructive: {
        default: contrastColor('#A61419', 'light'),
        hover: contrastColor('#CA7275', 'light'),
        active: contrastColor('#531B22', 'light'),
        disabled: contrastColor('#EDD0D1', 'light'),
        outline: contrastColor('#FFFFFF', 'dark'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
    },
    static: {
      background: {
        background_0: contrastColor('#046073', 'light'),
        background_1: contrastColor('#00303D', 'light'),
        background_2: contrastColor('#00232C', 'light'),
        background_3: contrastColor('#002B38', 'light'),
        background_accent_0: contrastColor('#00232C', 'light'),
        background_accent_1: contrastColor('#000000', 'light'),
        background_accent_2: contrastColor('#000000', 'light'),
        background_accent_3: contrastColor('#00303D', 'light'),
        background_accent_4: contrastColor('#000000', 'light'),
        background_accent_5: contrastColor('#000000', 'light'),
      },
      transport: {
        transport_city: contrastColor('#80C0D1'),
        transport_region: contrastColor('#98A56D'),
        transport_airport_express: contrastColor('#98A56D'),
        transport_boat: contrastColor('#5DA0E3'),
        transport_train: contrastColor('#C090AD'),
        transport_airport: contrastColor('#AD91D5'),
        transport_plane: contrastColor('#6FA7A7'),
        transport_flexible: contrastColor('#6FA7A7'),
        transport_bike: contrastColor('#A51140'),
        transport_scooter: contrastColor('#5B6100'),
        transport_other: contrastColor('#9C9C9C'),
      },
      status: {
        valid: contrastColor('#7FDABB', 'dark'),
        info: contrastColor('#99CDDA', 'dark'),
        warning: contrastColor('#FCBA63', 'dark'),
        error: contrastColor('#BE161D', 'light'),
      },
      zone_selection: {
        from: contrastColor('#FF7E81', 'dark'),
        to: contrastColor('#FF282E', 'light'),
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
