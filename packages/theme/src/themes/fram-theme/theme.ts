import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';
import hexToRgba from "hex-to-rgba";

const textColors = {
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

const contrastColorWithAlpha = (contrastColor: ContrastColor, alpha: number): ContrastColor => {
  return {
    background: hexToRgba(contrastColor.background, alpha),
    text: contrastColor.text
  }
}

export const baseColors = {
  // gray
  gray_0: contrastColor('#FFFFFF', 'dark'),
  gray_50: contrastColor('#F3F3F3', 'dark'),
  gray_100: contrastColor('#E6E6E6', 'dark'),
  gray_150: contrastColor('#D9D9D9', 'dark'),
  gray_200: contrastColor('#CCCCCC', 'dark'),
  gray_300: contrastColor('#B3B3B3', 'dark'),
  gray_400: contrastColor('#9A9A9A', 'dark'),
  gray_500: contrastColor('#808080', 'dark'),
  gray_600: contrastColor('#676767', 'light'),
  gray_700: contrastColor('#4D4D4D', 'light'),
  gray_800: contrastColor('#343434', 'light'),
  gray_850: contrastColor('#272727', 'light'),
  gray_900: contrastColor('#1A1A1A', 'light'),
  gray_950: contrastColor('#0D0D0D', 'light'),
  gray_1000: contrastColor('#000000', 'light'),

  // blue dark
  blue_dark_0: contrastColor('#FFFFFF', 'dark'),
  blue_dark_50: contrastColor('#EAF1F5', 'dark'),
  blue_dark_100: contrastColor('#D5E3EB', 'dark'),
  blue_dark_150: contrastColor('#BFD5E1', 'dark'),
  blue_dark_200: contrastColor('#AAC7D7', 'dark'),
  blue_dark_300: contrastColor('#80ABC3', 'dark'),
  blue_dark_400: contrastColor('#558FAE', 'dark'),
  blue_dark_500: contrastColor('#2B729A', 'light'),
  blue_dark_600: contrastColor('#005686', 'light'),
  blue_dark_700: contrastColor('#014165', 'light'),
  blue_dark_800: contrastColor('#012C44', 'light'),
  blue_dark_850: contrastColor('#012133', 'light'),
  blue_dark_900: contrastColor('#011622', 'light'),
  blue_dark_950: contrastColor('#010B11', 'light'),
  blue_dark_1000: contrastColor('#000000', 'light'),

  // blue logo
  blue_logo_0: contrastColor('#FFFFFF', 'dark'),
  blue_logo_50: contrastColor('#E6F2F8', 'dark'),
  blue_logo_100: contrastColor('#CCE5F0', 'dark'),
  blue_logo_150: contrastColor('#B3D7E9', 'dark'),
  blue_logo_200: contrastColor('#99CAE2', 'dark'),
  blue_logo_300: contrastColor('#66AFD3', 'dark'),
  blue_logo_400: contrastColor('#3395C4', 'dark'),
  blue_logo_500: contrastColor('#007AB5', 'light'),
  blue_logo_600: contrastColor('#016291', 'light'),
  blue_logo_700: contrastColor('#014A6D', 'light'),
  blue_logo_800: contrastColor('#013149', 'light'),
  blue_logo_850: contrastColor('#012537', 'light'),
  blue_logo_900: contrastColor('#011925', 'light'),
  blue_logo_950: contrastColor('#010D13', 'light'),
  blue_logo_1000: contrastColor('#000000', 'light'),

  // fylkesvegbilar
  fylkesvegbilar_0: contrastColor('#FFFFFF', 'dark'),
  fylkesvegbilar_50: contrastColor('#F0F5BF', 'dark'),
  fylkesvegbilar_100: contrastColor('#E2EB80', 'dark'),
  fylkesvegbilar_150: contrastColor('#D3E040', 'dark'),
  fylkesvegbilar_200: contrastColor('#C4D600', 'dark'),
  fylkesvegbilar_300: contrastColor('#ACBC01', 'dark'),
  fylkesvegbilar_400: contrastColor('#93A101', 'dark'),
  fylkesvegbilar_500: contrastColor('#7B8601', 'dark'),
  fylkesvegbilar_600: contrastColor('#626B01', 'light'),
  fylkesvegbilar_700: contrastColor('#4A5101', 'light'),
  fylkesvegbilar_800: contrastColor('#313601', 'light'),
  fylkesvegbilar_850: contrastColor('#252801', 'light'),
  fylkesvegbilar_900: contrastColor('#191B01', 'light'),
  fylkesvegbilar_950: contrastColor('#0D0E01', 'light'),
  fylkesvegbilar_1000: contrastColor('#000000', 'light'),

  // yellow logo
  yellow_logo_0: contrastColor('#FFFFFF', 'dark'),
  yellow_logo_50: contrastColor('#FBFAE4', 'dark'),
  yellow_logo_100: contrastColor('#F8F4C8', 'dark'),
  yellow_logo_150: contrastColor('#F4EFAD', 'dark'),
  yellow_logo_200: contrastColor('#F0E991', 'dark'),
  yellow_logo_300: contrastColor('#D2CC7F', 'dark'),
  yellow_logo_400: contrastColor('#B4AF6D', 'dark'),
  yellow_logo_500: contrastColor('#96925B', 'dark'),
  yellow_logo_600: contrastColor('#787549', 'light'),
  yellow_logo_700: contrastColor('#5A5837', 'light'),
  yellow_logo_800: contrastColor('#3D3B25', 'light'),
  yellow_logo_850: contrastColor('#2D2C1C', 'light'),
  yellow_logo_900: contrastColor('#1E1E13', 'light'),
  yellow_logo_950: contrastColor('#0F0F0A', 'light'),
  yellow_logo_1000: contrastColor('#000000', 'light'),

  // marine dark
  marine_dark_0: contrastColor('#FFFFFF', 'dark'),
  marine_dark_50: contrastColor('#EBF2F3', 'dark'),
  marine_dark_100: contrastColor('#D7E6E6', 'dark'),
  marine_dark_150: contrastColor('#C3D9DA', 'dark'),
  marine_dark_200: contrastColor('#AFCCCD', 'dark'),
  marine_dark_300: contrastColor('#86B2B4', 'dark'),
  marine_dark_400: contrastColor('#5E999B', 'dark'),
  marine_dark_500: contrastColor('#367F82', 'light'),
  marine_dark_600: contrastColor('#0D6569', 'light'),
  marine_dark_700: contrastColor('#0A4C4F', 'light'),
  marine_dark_800: contrastColor('#073335', 'light'),
  marine_dark_850: contrastColor('#062728', 'light'),
  marine_dark_900: contrastColor('#041A1B', 'light'),
  marine_dark_950: contrastColor('#020D0E', 'light'),
  marine_dark_1000: contrastColor('#000000', 'light'),

  // marine light
  marine_light_0: contrastColor('#FFFFFF', 'dark'),
  marine_light_50: contrastColor('#F3FAF8', 'dark'),
  marine_light_100: contrastColor('#E6F4F1', 'dark'),
  marine_light_150: contrastColor('#DAEFEA', 'dark'),
  marine_light_200: contrastColor('#CDE9E3', 'dark'),
  marine_light_300: contrastColor('#B4CCC7', 'dark'),
  marine_light_400: contrastColor('#9AAFAB', 'dark'),
  marine_light_500: contrastColor('#80928E', 'dark'),
  marine_light_600: contrastColor('#677572', 'light'),
  marine_light_700: contrastColor('#4D5856', 'light'),
  marine_light_800: contrastColor('#343B39', 'light'),
  marine_light_850: contrastColor('#272C2B', 'light'),
  marine_light_900: contrastColor('#1A1E1D', 'light'),
  marine_light_950: contrastColor('#0D0F0F', 'light'),
  marine_light_1000: contrastColor('#000000', 'light'),

  // green dark
  green_dark_0: contrastColor('#FFFFFF', 'dark'),
  green_dark_50: contrastColor('#F0F2EF', 'dark'),
  green_dark_100: contrastColor('#E1E4DF', 'dark'),
  green_dark_150: contrastColor('#D1D7D0', 'dark'),
  green_dark_200: contrastColor('#C2CAC0', 'dark'),
  green_dark_300: contrastColor('#A3AFA0', 'dark'),
  green_dark_400: contrastColor('#849480', 'dark'),
  green_dark_500: contrastColor('#667960', 'light'),
  green_dark_600: contrastColor('#475E40', 'light'),
  green_dark_700: contrastColor('#284320', 'light'),
  green_dark_800: contrastColor('#1B2D16', 'light'),
  green_dark_850: contrastColor('#152211', 'light'),
  green_dark_900: contrastColor('#0E170C', 'light'),
  green_dark_950: contrastColor('#070C06', 'light'),
  green_dark_1000: contrastColor('#000000', 'light'),

  // green light
  green_light_0: contrastColor('#FFFFFF', 'dark'),
  green_light_50: contrastColor('#EAF3E5', 'dark'),
  green_light_100: contrastColor('#D6E8CB', 'dark'),
  green_light_150: contrastColor('#C1DCB1', 'dark'),
  green_light_200: contrastColor('#ACD097', 'dark'),
  green_light_300: contrastColor('#82B962', 'dark'),
  green_light_400: contrastColor('#709F55', 'dark'),
  green_light_500: contrastColor('#5D8547', 'light'),
  green_light_600: contrastColor('#4B6A39', 'light'),
  green_light_700: contrastColor('#38502B', 'light'),
  green_light_800: contrastColor('#26351D', 'light'),
  green_light_850: contrastColor('#1C2816', 'light'),
  green_light_900: contrastColor('#131B0F', 'light'),
  green_light_950: contrastColor('#0A0D08', 'light'),
  green_light_1000: contrastColor('#000000', 'light'),

  // red dark
  red_dark_0: contrastColor('#FFFFFF', 'dark'),
  red_dark_50: contrastColor('#F5F1F2', 'dark'),
  red_dark_100: contrastColor('#EAE2E4', 'dark'),
  red_dark_150: contrastColor('#E0D3D7', 'dark'),
  red_dark_200: contrastColor('#D5C4C9', 'dark'),
  red_dark_300: contrastColor('#C0A6AE', 'dark'),
  red_dark_400: contrastColor('#AA8892', 'dark'),
  red_dark_500: contrastColor('#956B77', 'dark'),
  red_dark_600: contrastColor('#804D5C', 'light'),
  red_dark_700: contrastColor('#6B2F41', 'light'),
  red_dark_800: contrastColor('#551125', 'light'),
  red_dark_850: contrastColor('#410E1D', 'light'),
  red_dark_900: contrastColor('#2B0913', 'light'),
  red_dark_950: contrastColor('#16050A', 'light'),
  red_dark_1000: contrastColor('#000000', 'light'),

  // pink light
  pink_light_0: contrastColor('#FFFFFF', 'dark'),
  pink_light_50: contrastColor('#FCEAE8', 'dark'),
  pink_light_100: contrastColor('#F9D5D2', 'dark'),
  pink_light_150: contrastColor('#F7C0BB', 'dark'),
  pink_light_200: contrastColor('#F4AAA4', 'dark'),
  pink_light_300: contrastColor('#EE8076', 'dark'),
  pink_light_400: contrastColor('#CC6E66', 'dark'),
  pink_light_500: contrastColor('#AA5C55', 'dark'),
  pink_light_600: contrastColor('#884A44', 'light'),
  pink_light_700: contrastColor('#663733', 'light'),
  pink_light_800: contrastColor('#442522', 'light'),
  pink_light_850: contrastColor('#331C1A', 'light'),
  pink_light_900: contrastColor('#221311', 'light'),
  pink_light_950: contrastColor('#110A09', 'light'),
  pink_light_1000: contrastColor('#000000', 'light'),

  // yellow
  yellow_0: contrastColor('#FFFFFF', 'dark'),
  yellow_50: contrastColor('#FEF6BF', 'dark'),
  yellow_100: contrastColor('#FDEE80', 'dark'),
  yellow_150: contrastColor('#FCE540', 'dark'),
  yellow_200: contrastColor('#FBDC00', 'dark'),
  yellow_300: contrastColor('#DCC101', 'dark'),
  yellow_400: contrastColor('#BCA501', 'dark'),
  yellow_500: contrastColor('#9D8A01', 'dark'),
  yellow_600: contrastColor('#7E6E01', 'light'),
  yellow_700: contrastColor('#5F5301', 'light'),
  yellow_800: contrastColor('#3F3701', 'light'),
  yellow_850: contrastColor('#2F2A01', 'light'),
  yellow_900: contrastColor('#201C01', 'light'),
  yellow_950: contrastColor('#100E01', 'light'),
  yellow_1000: contrastColor('#000000', 'light'),

  // red
  red_0: contrastColor('#FFFFFF', 'dark'),
  red_50: contrastColor('#FCE9E9', 'dark'),
  red_100: contrastColor('#F9D2D3', 'dark'),
  red_150: contrastColor('#F7BBBD', 'dark'),
  red_200: contrastColor('#F4A4A7', 'dark'),
  red_300: contrastColor('#EE777B', 'dark'),
  red_400: contrastColor('#E9494E', 'dark'),
  red_500: contrastColor('#E31B22', 'light'),
  red_600: contrastColor('#B6161C', 'light'),
  red_700: contrastColor('#891115', 'light'),
  red_800: contrastColor('#5B0C0E', 'light'),
  red_850: contrastColor('#44090B', 'light'),
  red_900: contrastColor('#2E0608', 'light'),
  red_950: contrastColor('#170304', 'light'),
  red_1000: contrastColor('#000000', 'light'),


  // orange
  orange_0: contrastColor('#FFFFFF', 'dark'),
  orange_50: contrastColor('#FDEAE5', 'dark'),
  orange_100: contrastColor('#FCD5CA', 'dark'),
  orange_150: contrastColor('#FAC0AF', 'dark'),
  orange_200: contrastColor('#F8AB94', 'dark'),
  orange_300: contrastColor('#F5805F', 'dark'),
  orange_400: contrastColor('#F15629', 'dark'),
  orange_500: contrastColor('#C94823', 'light'),
  orange_600: contrastColor('#A13A1C', 'light'),
  orange_700: contrastColor('#792C15', 'light'),
  orange_800: contrastColor('#511D0E', 'light'),
  orange_850: contrastColor('#3D160B', 'light'),
  orange_900: contrastColor('#290F08', 'light'),
  orange_950: contrastColor('#140804', 'light'),
  orange_1000: contrastColor('#000000', 'light'),
};


const themes: Themes = {
  light: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: baseColors.blue_dark_600,
        hover: baseColors.blue_dark_700,
        active: baseColors.blue_dark_300,
        disabled: contrastColorWithAlpha(baseColors.blue_dark_600, 0.20),
        outline: baseColors.blue_logo_400,
        destructive: baseColors.red_600,
      },
      interactive_1: {
        default: baseColors.blue_dark_600,
        hover: baseColors.blue_dark_700,
        active: baseColors.blue_dark_900,
        disabled: contrastColorWithAlpha(baseColors.blue_dark_600, 0.20),
        outline: baseColors.blue_logo_400,
        destructive: baseColors.red_600,
      },
      interactive_2: {
        default: baseColors.gray_0,
        hover: baseColors.blue_dark_100,
        active: baseColors.blue_dark_200,
        disabled: contrastColorWithAlpha(baseColors.gray_0, 0.20),
        outline: baseColors.blue_logo_400,
        destructive: baseColors.red_600,
      },
      interactive_3: {
        default: baseColors.green_light_300,
        hover: baseColors.green_light_400,
        active: baseColors.green_light_200,
        disabled: contrastColorWithAlpha(baseColors.green_light_300, 0.20),
        outline: baseColors.blue_logo_400,
        destructive: baseColors.red_600,
      },
      interactive_destructive: {
        default: baseColors.red_500,
        hover: baseColors.red_600,
        active: baseColors.red_200,
        disabled: contrastColorWithAlpha(baseColors.red_500, 0.20),
        outline: baseColors.blue_logo_400,
        destructive: baseColors.red_600,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.green_light_300,
        secondary: baseColors.green_light_400,
      },
      transport_region: {
        primary: baseColors.blue_dark_600,
        secondary: baseColors.blue_dark_700,
      },
      transport_airport_express: {
        primary: baseColors.blue_dark_600,
        secondary: baseColors.blue_dark_700,
      },
      transport_boat: {
        primary: baseColors.blue_logo_500,
        secondary: baseColors.blue_logo_600,
      },
      transport_train: {
        primary: baseColors.red_dark_800,
        secondary: baseColors.red_dark_900,
      },
      transport_airport: {
        primary: baseColors.orange_400,
        secondary: baseColors.orange_500,
      },
      transport_plane: {
        primary: baseColors.pink_light_300,
        secondary: baseColors.pink_light_400,
      },
      transport_flexible: {
        primary: baseColors.pink_light_300,
        secondary: baseColors.pink_light_400,
      },
      transport_bike: {
        primary: baseColors.red_800,
        secondary: baseColors.red_900,
      },
      transport_scooter: {
        primary: baseColors.green_dark_700,
        secondary: baseColors.green_dark_800,
      },
      transport_car: {
        primary: baseColors.red_dark_400,
        secondary: baseColors.red_dark_500,
      },
      transport_other: {
        primary: baseColors.gray_600,
        secondary: baseColors.gray_700,
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_0,
        background_1: baseColors.gray_50,
        background_2: baseColors.gray_100,
        background_3: baseColors.gray_150,
        background_accent_0: baseColors.blue_logo_500,
        background_accent_1: baseColors.blue_logo_400,
        background_accent_2: baseColors.blue_logo_100,
        background_accent_3: baseColors.marine_dark_600,
        background_accent_4: baseColors.yellow_logo_200,
        background_accent_5: baseColors.blue_logo_500,
      },
      zone_selection: {
        from: baseColors.green_light_300,
        to: baseColors.blue_dark_600,
      },
    },
    status: {
      valid: {
        primary: baseColors.green_light_300,
        secondary: baseColors.green_light_100,
      },
      info: {
        primary: baseColors.marine_dark_700,
        secondary: baseColors.marine_light_200,
      },
      warning: {
        primary: baseColors.yellow_200,
        secondary: baseColors.yellow_50,
      },
      error: {
        primary: baseColors.red_500,
        secondary: baseColors.red_100,
      },
    },
    text: {
      colors: {
        primary: textColors.dark,
        secondary: hexToRgba(baseColors.gray_1000.background, 0.91),
        disabled: hexToRgba(baseColors.gray_1000.background, 0.20)
      },
    },
    border: {
      primary: baseColors.gray_100.background,
      secondary: baseColors.gray_1000.background,
      focus: baseColors.blue_dark_600.background,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
    geofencingZones: {
      Allowed: {
        color: baseColors.blue_dark_500,
        fillOpacity: 0.075,
        strokeOpacity: 0.5,
        layerIndexWeight: 1,
      },
      Slow: {
        color: baseColors.yellow_100,
        fillOpacity: 0.6,
        strokeOpacity: 0.8,
        layerIndexWeight: 2,
      },
      NoParking: {
        color: baseColors.red_400,
        fillOpacity: 0.5,
        strokeOpacity: 0.7,
        layerIndexWeight: 3,
      },
      NoEntry: {
        color: baseColors.red_900,
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
        default: baseColors.blue_logo_500,
        hover: baseColors.blue_logo_600,
        active: baseColors.blue_logo_200,
        disabled: contrastColorWithAlpha(baseColors.blue_logo_500, 0.20),
        outline: baseColors.yellow_logo_200,
        destructive: baseColors.red_300,
      },
      interactive_1: {
        default: baseColors.blue_logo_500,
        hover: baseColors.blue_logo_600,
        active: baseColors.blue_logo_900,
        disabled: contrastColorWithAlpha(baseColors.blue_logo_500, 0.20),
        outline: baseColors.yellow_logo_200,
        destructive: baseColors.red_300,
      },
      interactive_2: {
        default: baseColors.blue_dark_900,
        hover: baseColors.blue_dark_800,
        active: baseColors.blue_dark_700,
        disabled: contrastColorWithAlpha(baseColors.blue_dark_900, 0.20),
        outline: baseColors.yellow_logo_200,
        destructive: baseColors.red_300,
      },
      interactive_3: {
        default: baseColors.green_dark_700,
        hover: baseColors.green_dark_800,
        active: baseColors.green_dark_600,
        disabled: contrastColorWithAlpha(baseColors.green_dark_700, 0.20),
        outline: baseColors.yellow_logo_200,
        destructive: baseColors.red_300,
      },
      interactive_destructive: {
        default: baseColors.red_500,
        hover: baseColors.red_600,
        active: baseColors.red_200,
        disabled: contrastColorWithAlpha(baseColors.red_500, 0.20),
        outline: baseColors.yellow_logo_200,
        destructive: baseColors.red_300,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.green_light_300,
        secondary: baseColors.green_light_200,
      },
      transport_region: {
        primary: baseColors.blue_dark_600,
        secondary: baseColors.blue_dark_500,
      },
      transport_airport_express: {
        primary: baseColors.blue_dark_600,
        secondary: baseColors.blue_dark_500,
      },
      transport_boat: {
        primary: baseColors.blue_logo_500,
        secondary: baseColors.blue_logo_400,
      },
      transport_train: {
        primary: baseColors.red_dark_800,
        secondary: baseColors.red_dark_700,
      },
      transport_airport: {
        primary: baseColors.orange_400,
        secondary: baseColors.orange_300,
      },
      transport_plane: {
        primary: baseColors.pink_light_300,
        secondary: baseColors.pink_light_200,
      },
      transport_flexible: {
        primary: baseColors.pink_light_300,
        secondary: baseColors.pink_light_200,
      },
      transport_bike: {
        primary: baseColors.red_800,
        secondary: baseColors.red_700,
      },
      transport_scooter: {
        primary: baseColors.green_dark_700,
        secondary: baseColors.green_dark_600,
      },
      transport_car: {
        primary: baseColors.red_dark_400,
        secondary: baseColors.red_dark_300,
      },
      transport_other: {
        primary: baseColors.gray_600,
        secondary: baseColors.gray_500,
      },
    },
    static: {
      background: {
        background_0: baseColors.blue_dark_900,
        background_1: baseColors.blue_dark_850,
        background_2: baseColors.blue_dark_800,
        background_3: baseColors.blue_dark_700,
        background_accent_0: baseColors.blue_dark_600,
        background_accent_1: baseColors.blue_dark_700,
        background_accent_2: baseColors.blue_dark_900,
        background_accent_3: baseColors.marine_light_200,
        background_accent_4: baseColors.yellow_logo_200,
        background_accent_5: baseColors.blue_dark_800,
      },
      zone_selection: {
        from: baseColors.green_light_300,
        to: baseColors.blue_dark_600
      },
    },
    status: {
      valid: {
        primary: baseColors.green_light_300,
        secondary: baseColors.green_light_700,
      },
      info: {
        primary: baseColors.marine_dark_700,
        secondary: baseColors.marine_dark_800,
      },
      warning: {
        primary: baseColors.yellow_200,
        secondary: baseColors.yellow_800,
      },
      error: {
        primary: baseColors.red_500,
        secondary: baseColors.red_800,
      },
    },
    text: {
      colors: {
        primary: textColors.light,
        secondary: hexToRgba(baseColors.gray_0.background, 0.77),
        disabled: hexToRgba(baseColors.gray_0.background, 0.20),
      },
    },
    border: {
      primary: baseColors.blue_dark_800.background,
      secondary: baseColors.gray_1000.background,
      focus: baseColors.blue_dark_600.background,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
    geofencingZones: {
      Allowed: {
        color: baseColors.blue_logo_500,
        fillOpacity: 0.075,
        strokeOpacity: 0.5,
        layerIndexWeight: 1,
      },
      Slow: {
        color: baseColors.yellow_100,
        fillOpacity: 0.6,
        strokeOpacity: 0.8,
        layerIndexWeight: 2,
      },
      NoParking: {
        color: baseColors.red_400,
        fillOpacity: 0.5,
        strokeOpacity: 0.7,
        layerIndexWeight: 3,
      },
      NoEntry: {
        color: baseColors.red_900,
        fillOpacity: 0.55,
        strokeOpacity: 0.75,
        layerIndexWeight: 5,
      },
    },
  },
};

export default themes;
