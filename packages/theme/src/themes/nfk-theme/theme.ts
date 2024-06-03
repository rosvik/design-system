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

// Currently exactly the same as in the AtB theme.
// The colors can be changed, but should follow standard practice:
// no entry - dark/black
// no parking - red
// slow zone - yellow
// allowed - blue

export const geofencingZoneBaseColors = {
  blue_500: contrastColor('#007C92', 'light'),
  yellow_100: contrastColor('#F0E973', 'dark'),
  red_400: contrastColor('#C76B89', 'dark'),
  red_900: contrastColor('#380616', 'light'),
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
    transport: {
      transport_city: {
        primary: contrastColor('#014D61', 'light'),
        secondary: contrastColor('#014D61', 'light'),
      },
      transport_region: {
        primary: contrastColor('#6C7E2F', 'light'),
        secondary: contrastColor('#6C7E2F', 'light'),
      },
      transport_airport_express: {
        primary: contrastColor('#6C7E2F', 'light'),
        secondary: contrastColor('#6C7E2F', 'light'),
      },
      transport_boat: {
        primary: contrastColor('#1777D7', 'light'),
        secondary: contrastColor('#1777D7', 'light'),
      },
      transport_train: {
        primary: contrastColor('#A5608A', 'light'),
        secondary: contrastColor('#A5608A', 'light'),
      },
      transport_airport: {
        primary: contrastColor('#8A62C3', 'light'),
        secondary: contrastColor('#8A62C3', 'light'),
      },
      transport_plane: {
        primary: contrastColor('#318181', 'light'),
        secondary: contrastColor('#318181', 'light'),
      },
      transport_flexible: {
        primary: contrastColor('#717171', 'light'),
        secondary: contrastColor('#717171', 'light'),
      },
      transport_bike: {
        primary: contrastColor('#7D0D31', 'light'),
        secondary: contrastColor('#7D0D31', 'light'),
      },
      transport_scooter: {
        primary: contrastColor('#464A00', 'light'),
        secondary: contrastColor('#464A00', 'light'),
      },
      transport_car: {
        primary: contrastColor('#6F5468', 'light'),
        secondary: contrastColor('#6F5468', 'light'),
      },
      transport_other: {
        primary: contrastColor('#717171', 'light'),
        secondary: contrastColor('#717171', 'light'),
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
      zone_selection: {
        from: contrastColor('#FF7E81', 'dark'),
        to: contrastColor('#FF282E', 'light'),
      },
    },
    status: {
      valid: {
        primary: contrastColor('#7FDABB', 'dark'),
        secondary: contrastColor('#7FDABB', 'dark'),
      },
      info: {
        primary: contrastColor('#99CDDA', 'dark'),
        secondary: contrastColor('#99CDDA', 'dark'),
      },
      warning: {
        primary: contrastColor('#FCBA63', 'dark'),
        secondary: contrastColor('#FCBA63', 'dark'),
      },
      error: {
        primary: contrastColor('#A61419', 'light'),
        secondary: contrastColor('#A61419', 'light'),
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
    geofencingZones: {
      Allowed: {
        color: geofencingZoneBaseColors.blue_500,
        fillOpacity: 0.075,
        strokeOpacity: 0.5,
        layerIndexWeight: 1,
      },
      Slow: {
        color: geofencingZoneBaseColors.yellow_100,
        fillOpacity: 0.6,
        strokeOpacity: 0.8,
        layerIndexWeight: 2,
      },
      NoParking: {
        color: geofencingZoneBaseColors.red_400,
        fillOpacity: 0.5,
        strokeOpacity: 0.7,
        layerIndexWeight: 3,
      },
      NoEntry: {
        color: geofencingZoneBaseColors.red_900,
        fillOpacity: 0.55,
        strokeOpacity: 0.75,
        layerIndexWeight: 5,
      },
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
    transport: {
      transport_city: {
        primary: contrastColor('#80C0D1', 'light'),
        secondary: contrastColor('#80C0D1', 'light'),
      },
      transport_region: {
        primary: contrastColor('#98A56D', 'light'),
        secondary: contrastColor('#98A56D', 'light'),
      },
      transport_airport_express: {
        primary: contrastColor('#98A56D', 'light'),
        secondary: contrastColor('#98A56D', 'light'),
      },
      transport_boat: {
        primary: contrastColor('#5DA0E3', 'light'),
        secondary: contrastColor('#5DA0E3', 'light'),
      },
      transport_train: {
        primary: contrastColor('#C090AD', 'light'),
        secondary: contrastColor('#C090AD', 'light'),
      },
      transport_airport: {
        primary: contrastColor('#AD91D5', 'light'),
        secondary: contrastColor('#AD91D5', 'light'),
      },
      transport_plane: {
        primary: contrastColor('#6FA7A7', 'light'),
        secondary: contrastColor('#6FA7A7', 'light'),
      },
      transport_flexible: {
        primary: contrastColor('#6FA7A7', 'light'),
        secondary: contrastColor('#6FA7A7', 'light'),
      },
      transport_bike: {
        primary: contrastColor('#A51140', 'light'),
        secondary: contrastColor('#A51140', 'light'),
      },
      transport_scooter: {
        primary: contrastColor('#5B6100', 'light'),
        secondary: contrastColor('#5B6100', 'light'),
      },
      transport_car: {
        primary: contrastColor('#6F5468', 'light'),
        secondary: contrastColor('#6F5468', 'light'),
      },
      transport_other: {
        primary: contrastColor('#9C9C9C', 'light'),
        secondary: contrastColor('#9C9C9C', 'light'),
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
      zone_selection: {
        from: contrastColor('#FF7E81', 'dark'),
        to: contrastColor('#FF282E', 'light'),
      },
    },
    status: {
      valid: {
        primary: contrastColor('#7FDABB', 'dark'),
        secondary: contrastColor('#7FDABB', 'dark'),
      },
      info: {
        primary: contrastColor('#99CDDA', 'dark'),
        secondary: contrastColor('#99CDDA', 'dark'),
      },
      warning: {
        primary: contrastColor('#FCBA63', 'dark'),
        secondary: contrastColor('#FCBA63', 'dark'),
      },
      error: {
        primary: contrastColor('#BE161D', 'light'),
        secondary: contrastColor('#BE161D', 'light'),
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
    geofencingZones: {
      Allowed: {
        color: geofencingZoneBaseColors.blue_500,
        fillOpacity: 0.075,
        strokeOpacity: 0.5,
        layerIndexWeight: 1,
      },
      Slow: {
        color: geofencingZoneBaseColors.yellow_100,
        fillOpacity: 0.6,
        strokeOpacity: 0.8,
        layerIndexWeight: 2,
      },
      NoParking: {
        color: geofencingZoneBaseColors.red_400,
        fillOpacity: 0.5,
        strokeOpacity: 0.7,
        layerIndexWeight: 3,
      },
      NoEntry: {
        color: geofencingZoneBaseColors.red_900,
        fillOpacity: 0.55,
        strokeOpacity: 0.75,
        layerIndexWeight: 5,
      },
    },
  },
};

export default themes;
