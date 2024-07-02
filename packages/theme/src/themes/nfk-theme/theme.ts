import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';
import hexToRgba from 'hex-to-rgba';

const colors = {
  white: '#ffffff',
  black: '#000000',
  text: {
    light: '#FFFFFF',
    dark: '#000000',
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

const contrastColorWithAlpha = (contrastColor: ContrastColor, alpha: number): ContrastColor => {
  return {
    background: hexToRgba(contrastColor.background, alpha),
    text: contrastColor.text
  }
}


export const baseColors = {
  // gray
  gray_0: contrastColor('#FFFFFF', 'dark'),
  gray_50: contrastColor('#ECF1F2', 'dark'),
  gray_100: contrastColor('#DAE2E4', 'dark'),
  gray_150: contrastColor('#C7D4D7', 'dark'),
  gray_200: contrastColor('#B5C6CA', 'dark'),
  gray_300: contrastColor('#8FA9AF', 'dark'),
  gray_400: contrastColor('#7B9196', 'dark'),
  gray_500: contrastColor('#67797E', 'dark'),
  gray_600: contrastColor('#526164', 'light'),
  gray_700: contrastColor('#3E494B', 'light'),
  gray_800: contrastColor('#293132', 'light'),
  gray_850: contrastColor('#1F2526', 'light'),
  gray_900: contrastColor('#151819', 'light'),
  gray_950: contrastColor('#0B0C0D', 'light'),
  gray_1000: contrastColor('#000000', 'light'),

  // blue dark
  blue_dark_0: contrastColor('#FFFFFF', 'dark'),
  blue_dark_50: contrastColor('#EDF4F6', 'dark'),
  blue_dark_100: contrastColor('#DBE9EC', 'dark'),
  blue_dark_150: contrastColor('#C9DDE2', 'dark'),
  blue_dark_200: contrastColor('#B8D2D9', 'dark'),
  blue_dark_300: contrastColor('#94BBC5', 'dark'),
  blue_dark_400: contrastColor('#70A4B2', 'dark'),
  blue_dark_500: contrastColor('#4C8E9F', 'dark'),
  blue_dark_600: contrastColor('#28778B', 'light'),
  blue_dark_700: contrastColor('#046078', 'light'),
  blue_dark_800: contrastColor('#034151', 'light'),
  blue_dark_850: contrastColor('#03313D', 'light'),
  blue_dark_900: contrastColor('#022129', 'light'),
  blue_dark_950: contrastColor('#011115', 'light'),
  blue_dark_1000: contrastColor('#000000', 'light'),

  // blue nfk
  blue_nfk_0: contrastColor('#FFFFFF', 'dark'),
  blue_nfk_50: contrastColor('#E6F3F6', 'dark'),
  blue_nfk_100: contrastColor('#CCE6ED', 'dark'),
  blue_nfk_150: contrastColor('#B3D9E4', 'dark'),
  blue_nfk_200: contrastColor('#9ACDDA', 'dark'),
  blue_nfk_300: contrastColor('#67B4C8', 'dark'),
  blue_nfk_400: contrastColor('#349AB6', 'dark'),
  blue_nfk_500: contrastColor('#0181A3', 'light'),
  blue_nfk_600: contrastColor('#026883', 'light'),
  blue_nfk_700: contrastColor('#014E62', 'light'),
  blue_nfk_800: contrastColor('#013442', 'light'),
  blue_nfk_850: contrastColor('#012731', 'light'),
  blue_nfk_900: contrastColor('#011A21', 'light'),
  blue_nfk_950: contrastColor('#010D11', 'light'),
  blue_nfk_1000: contrastColor('#000000', 'light'),

  // green
  green_0: contrastColor('#FFFFFF', 'dark'),
  green_50: contrastColor('#EEF8F5', 'dark'),
  green_100: contrastColor('#CCEBE1', 'dark'),
  green_150: contrastColor('#B3E1D1', 'dark'),
  green_200: contrastColor('#99D7C2', 'dark'),
  green_300: contrastColor('#66C3A4', 'dark'),
  green_400: contrastColor('#33AF85', 'dark'),
  green_500: contrastColor('#2B926F', 'dark'),
  green_600: contrastColor('#237559', 'light'),
  green_700: contrastColor('#1A5843', 'light'),
  green_800: contrastColor('#123B2D', 'light'),
  green_850: contrastColor('#0D2C22', 'light'),
  green_900: contrastColor('#091E17', 'light'),
  green_950: contrastColor('#050F0C', 'light'),
  green_1000: contrastColor('#000000', 'light'),

  // yellow
  yellow_0: contrastColor('#FFFFFF', 'dark'),
  yellow_50: contrastColor('#FEEED8', 'dark'),
  yellow_100: contrastColor('#FEDDB1', 'dark'),
  yellow_150: contrastColor('#FDCB8A', 'dark'),
  yellow_200: contrastColor('#FCBA63', 'dark'),
  yellow_300: contrastColor('#DDA357', 'dark'),
  yellow_400: contrastColor('#BD8C4B', 'dark'),
  yellow_500: contrastColor('#9E753F', 'dark'),
  yellow_600: contrastColor('#7F5D32', 'light'),
  yellow_700: contrastColor('#5F4626', 'light'),
  yellow_800: contrastColor('#3F2F19', 'light'),
  yellow_850: contrastColor('#302313', 'light'),
  yellow_900: contrastColor('#20180D', 'light'),
  yellow_950: contrastColor('#100C07', 'light'),
  yellow_1000: contrastColor('#000000', 'light'),

  // red
  red_0: contrastColor('#FFFFFF', 'dark'),
  red_50: contrastColor('#FDEEED', 'dark'),
  red_100: contrastColor('#FCDCDA', 'dark'),
  red_150: contrastColor('#FACAC8', 'dark'),
  red_200: contrastColor('#F9B9B5', 'dark'),
  red_300: contrastColor('#F59590', 'dark'),
  red_400: contrastColor('#F2726A', 'dark'),
  red_500: contrastColor('#EF4E45', 'dark'),
  red_600: contrastColor('#C03F38', 'light'),
  red_700: contrastColor('#902F2A', 'light'),
  red_800: contrastColor('#60201C', 'light'),
  red_850: contrastColor('#481815', 'light'),
  red_900: contrastColor('#30100E', 'light'),
  red_950: contrastColor('#180808', 'light'),
  red_1000: contrastColor('#000000', 'light'),


  // transport, city
  transport_city_0: contrastColor('#FFFFFF', 'dark'),
  transport_city_50: contrastColor('#EDF3F4', 'dark'),
  transport_city_100: contrastColor('#DBE6E9', 'dark'),
  transport_city_150: contrastColor('#C9D9DD', 'dark'),
  transport_city_200: contrastColor('#B6CCD2', 'dark'),
  transport_city_300: contrastColor('#92B3BC', 'dark'),
  transport_city_400: contrastColor('#6E9AA5', 'dark'),
  transport_city_500: contrastColor('#49808E', 'dark'),
  transport_city_600: contrastColor('#256778', 'light'),
  transport_city_700: contrastColor('#004D61', 'light'),
  transport_city_800: contrastColor('#013441', 'light'),
  transport_city_850: contrastColor('#012731', 'light'),
  transport_city_900: contrastColor('#011A21', 'light'),
  transport_city_950: contrastColor('#010E11', 'light'),
  transport_city_1000: contrastColor('#000000', 'light'),

  // transport, region
  transport_region_0: contrastColor('#FFFFFF', 'dark'),
  transport_region_50: contrastColor('#F0F2EA', 'dark'),
  transport_region_100: contrastColor('#E2E5D6', 'dark'),
  transport_region_150: contrastColor('#D3D8C1', 'dark'),
  transport_region_200: contrastColor('#C4CBAC', 'dark'),
  transport_region_300: contrastColor('#A6B182', 'dark'),
  transport_region_400: contrastColor('#899758', 'dark'),
  transport_region_500: contrastColor('#6B7D2E', 'dark'),
  transport_region_600: contrastColor('#566526', 'light'),
  transport_region_700: contrastColor('#414C1C', 'light'),
  transport_region_800: contrastColor('#2B3313', 'light'),
  transport_region_850: contrastColor('#21260F', 'light'),
  transport_region_900: contrastColor('#161A0A', 'light'),
  transport_region_950: contrastColor('#0B0D05', 'light'),
  transport_region_1000: contrastColor('#000000', 'light'),

  // transport, boat
  transport_boat_0: contrastColor('#FFFFFF', 'dark'),
  transport_boat_50: contrastColor('#EBF3FC', 'dark'),
  transport_boat_100: contrastColor('#D7E8F8', 'dark'),
  transport_boat_150: contrastColor('#C2DCF5', 'dark'),
  transport_boat_200: contrastColor('#AED0F1', 'dark'),
  transport_boat_300: contrastColor('#85B9EA', 'dark'),
  transport_boat_400: contrastColor('#5CA1E3', 'dark'),
  transport_boat_500: contrastColor('#4D87BE', 'light'),
  transport_boat_600: contrastColor('#3E6C98', 'light'),
  transport_boat_700: contrastColor('#2F5172', 'light'),
  transport_boat_800: contrastColor('#1F364C', 'light'),
  transport_boat_850: contrastColor('#182939', 'light'),
  transport_boat_900: contrastColor('#101B26', 'light'),
  transport_boat_950: contrastColor('#080E13', 'light'),
  transport_boat_1000: contrastColor('#000000', 'light'),

  // transport, airport express
  transport_airport_express_0: contrastColor('#FFFFFF', 'dark'),
  transport_airport_express_50: contrastColor('#F4F0F9', 'dark'),
  transport_airport_express_100: contrastColor('#E8E0F3', 'dark'),
  transport_airport_express_150: contrastColor('#DCD0ED', 'dark'),
  transport_airport_express_200: contrastColor('#D0C0E7', 'dark'),
  transport_airport_express_300: contrastColor('#B9A0DB', 'dark'),
  transport_airport_express_400: contrastColor('#A281CE', 'dark'),
  transport_airport_express_500: contrastColor('#8A61C2', 'light'),
  transport_airport_express_600: contrastColor('#6F4E9C', 'light'),
  transport_airport_express_700: contrastColor('#533B75', 'light'),
  transport_airport_express_800: contrastColor('#38274E', 'light'),
  transport_airport_express_850: contrastColor('#2A1E3B', 'light'),
  transport_airport_express_900: contrastColor('#1C1427', 'light'),
  transport_airport_express_950: contrastColor('#0E0A14', 'light'),
  transport_airport_express_1000: contrastColor('#000000', 'light'),

  // transport, plane
  transport_plane_0: contrastColor('#FFFFFF', 'dark'),
  transport_plane_50: contrastColor('#EBF3F3', 'dark'),
  transport_plane_100: contrastColor('#D6E6E6', 'dark'),
  transport_plane_150: contrastColor('#C1DADA', 'dark'),
  transport_plane_200: contrastColor('#ADCDCD', 'dark'),
  transport_plane_300: contrastColor('#83B4B4', 'dark'),
  transport_plane_400: contrastColor('#5A9B9B', 'dark'),
  transport_plane_500: contrastColor('#308282', 'dark'),
  transport_plane_600: contrastColor('#276969', 'light'),
  transport_plane_700: contrastColor('#1E4F4F', 'light'),
  transport_plane_800: contrastColor('#143535', 'light'),
  transport_plane_850: contrastColor('#0F2828', 'light'),
  transport_plane_900: contrastColor('#0A1B1B', 'light'),
  transport_plane_950: contrastColor('#060E0E', 'light'),
  transport_plane_1000: contrastColor('#000000', 'light'),

  // transport, other
  transport_other_0: contrastColor('#FFFFFF', 'dark'),
  transport_other_50: contrastColor('#F3F3F3', 'dark'),
  transport_other_100: contrastColor('#E7E7E7', 'dark'),
  transport_other_150: contrastColor('#DCDCDC', 'dark'),
  transport_other_200: contrastColor('#D0D0D0', 'dark'),
  transport_other_300: contrastColor('#B8B8B8', 'dark'),
  transport_other_400: contrastColor('#A0A0A0', 'dark'),
  transport_other_500: contrastColor('#888888', 'dark'),
  transport_other_600: contrastColor('#707070', 'light'),
  transport_other_700: contrastColor('#555555', 'light'),
  transport_other_800: contrastColor('#393939', 'light'),
  transport_other_850: contrastColor('#2B2B2B', 'light'),
  transport_other_900: contrastColor('#1D1D1D', 'light'),
  transport_other_950: contrastColor('#0F0F0F', 'light'),
  transport_other_1000: contrastColor('#000000', 'light'),
};


const themes: Themes = {
  light: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: baseColors.blue_dark_700,
        hover: baseColors.blue_dark_800,
        active: baseColors.blue_dark_400,
        disabled: contrastColorWithAlpha(baseColors.blue_dark_700, 0.20),
        outline: baseColors.transport_plane_400,
        destructive: baseColors.red_600,
      },
      interactive_1: {
        default: baseColors.blue_dark_700,
        hover: baseColors.blue_dark_800,
        active: baseColors.blue_dark_900,
        disabled: contrastColorWithAlpha(baseColors.blue_dark_700, 0.20),
        outline: baseColors.transport_plane_400,
        destructive: baseColors.red_600,
      },
      interactive_2: {
        default: baseColors.gray_0,
        hover: baseColors.blue_dark_100,
        active: baseColors.blue_dark_150,
        disabled: contrastColorWithAlpha(baseColors.gray_0, 0.20),
        outline: baseColors.transport_plane_400,
        destructive: baseColors.red_600,
      },
      interactive_3: {
        default: baseColors.green_400,
        hover: baseColors.green_400,
        active: baseColors.green_300,
        disabled: contrastColorWithAlpha(baseColors.green_400, 0.20),
        outline: baseColors.transport_plane_400,
        destructive: baseColors.red_600,
      },
      interactive_destructive: {
        default: baseColors.red_500,
        hover: baseColors.red_600,
        active: baseColors.red_200,
        disabled: contrastColorWithAlpha(baseColors.red_500, 0.20),
        outline: baseColors.transport_plane_400,
        destructive: baseColors.red_600,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.transport_city_700,
        secondary: baseColors.transport_city_800,
      },
      transport_region: {
        primary: baseColors.transport_region_500,
        secondary: baseColors.transport_region_600,
      },
      transport_airport_express: {
        primary: baseColors.transport_airport_express_500,
        secondary: baseColors.transport_airport_express_600,
      },
      transport_boat: {
        primary: baseColors.transport_boat_400,
        secondary: baseColors.transport_boat_500,
      },
      transport_train: {
        primary: baseColors.transport_airport_express_400,
        secondary: baseColors.transport_airport_express_500,
      },
      transport_airport: {
        primary: baseColors.transport_plane_600,
        secondary: baseColors.transport_plane_700,
      },
      transport_plane: {
        primary: baseColors.transport_plane_500,
        secondary: baseColors.transport_plane_600,
      },
      transport_flexible: {
        primary: baseColors.transport_other_600,
        secondary: baseColors.transport_other_700,
      },
      transport_bike: {
        primary: baseColors.red_700,
        secondary: baseColors.red_800,
      },
      transport_scooter: {
        primary: baseColors.transport_region_700,
        secondary: baseColors.transport_region_800,
      },
      transport_car: {
        primary: baseColors.transport_airport_express_700,
        secondary: baseColors.transport_airport_express_800,
      },
      transport_other: {
        primary: baseColors.transport_other_600,
        secondary: baseColors.transport_other_700,
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_0,
        background_1: baseColors.gray_50,
        background_2: baseColors.gray_100,
        background_3: baseColors.gray_150,
        background_accent_0: baseColors.blue_nfk_500,
        background_accent_1: baseColors.blue_nfk_400,
        background_accent_2: baseColors.blue_nfk_100,
        background_accent_3: baseColors.blue_dark_700,
        background_accent_4: baseColors.yellow_150,
        background_accent_5: baseColors.blue_nfk_200,
      },
      zone_selection: {
        from: baseColors.red_400,
        to: baseColors.red_500,
      },
    },
    status: {
      valid: {
        primary: baseColors.green_400,
        secondary: baseColors.green_100,
      },
      info: {
        primary: baseColors.blue_dark_700,
        secondary: baseColors.blue_dark_100,
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
        primary: colors.text.dark,
        secondary: hexToRgba(baseColors.gray_1000.background, 0.91),
        disabled: hexToRgba(baseColors.gray_1000.background, 0.20),
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
        default: baseColors.blue_nfk_500,
        hover: baseColors.blue_nfk_600,
        active: baseColors.blue_nfk_200,
        disabled: contrastColorWithAlpha(baseColors.blue_nfk_500, 0.20),
        outline: baseColors.transport_plane_200,
        destructive: baseColors.red_300,
      },
      interactive_1: {
        default: baseColors.blue_nfk_500,
        hover: baseColors.blue_nfk_600,
        active: baseColors.blue_nfk_900,
        disabled: contrastColorWithAlpha(baseColors.blue_nfk_500, 0.20),
        outline: baseColors.transport_plane_200,
        destructive: baseColors.red_300,
      },
      interactive_2: {
        default: baseColors.blue_dark_900,
        hover: baseColors.blue_dark_800,
        active: baseColors.blue_dark_700,
        disabled: contrastColorWithAlpha(baseColors.blue_dark_900, 0.20),
        outline: baseColors.transport_plane_300,
        destructive: baseColors.red_300,
      },
      interactive_3: {
        default: baseColors.green_700,
        hover: baseColors.green_800,
        active: baseColors.green_600,
        disabled: contrastColorWithAlpha(baseColors.green_700, 0.20),
        outline: baseColors.transport_plane_200,
        destructive: baseColors.red_300,
      },
      interactive_destructive: {
        default: baseColors.red_500,
        hover: baseColors.red_600,
        active: baseColors.red_200,
        disabled: contrastColorWithAlpha(baseColors.red_500, 0.20),
        outline: baseColors.transport_plane_200,
        destructive: baseColors.red_300,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.transport_city_700,
        secondary: baseColors.transport_city_600,
      },
      transport_region: {
        primary: baseColors.transport_region_500,
        secondary: baseColors.transport_region_400,
      },
      transport_airport_express: {
        primary: baseColors.transport_airport_express_500,
        secondary: baseColors.transport_airport_express_400,
      },
      transport_boat: {
        primary: baseColors.transport_boat_400,
        secondary: baseColors.transport_boat_300,
      },
      transport_train: {
        primary: baseColors.transport_airport_express_400,
        secondary: baseColors.transport_airport_express_300,
      },
      transport_airport: {
        primary: baseColors.transport_plane_600,
        secondary: baseColors.transport_plane_500,
      },
      transport_plane: {
        primary: baseColors.transport_plane_500,
        secondary: baseColors.transport_plane_400,
      },
      transport_flexible: {
        primary: baseColors.transport_other_600,
        secondary: baseColors.transport_other_500,
      },
      transport_bike: {
        primary: baseColors.red_700,
        secondary: baseColors.red_600,
      },
      transport_scooter: {
        primary: baseColors.transport_region_700,
        secondary: baseColors.transport_region_600,
      },
      transport_car: {
        primary: baseColors.transport_airport_express_700,
        secondary: baseColors.transport_airport_express_600,
      },
      transport_other: {
        primary: baseColors.transport_other_600,
        secondary: baseColors.transport_other_500,
      },
    },
    static: {
      background: {
        background_0: baseColors.blue_dark_900,
        background_1: baseColors.blue_dark_850,
        background_2: baseColors.blue_dark_800,
        background_3: baseColors.blue_dark_700,
        background_accent_0: baseColors.blue_dark_700,
        background_accent_1: baseColors.blue_dark_800,
        background_accent_2: baseColors.blue_dark_900,
        background_accent_3: baseColors.blue_nfk_200,
        background_accent_4: baseColors.yellow_150,
        background_accent_5: baseColors.blue_dark_850,
      },
      zone_selection: {
        from: baseColors.red_400,
        to: baseColors.red_500,
      },
    },
    status: {
      valid: {
        primary: baseColors.green_300,
        secondary: baseColors.green_700,
      },
      info: {
        primary: baseColors.blue_dark_700,
        secondary: baseColors.blue_dark_800,
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
        primary: colors.text.light,
        secondary: hexToRgba(baseColors.gray_0.background, 0.77),
        disabled: hexToRgba(baseColors.gray_0.background, 0.20),
      },
    },
    border: {
      primary: baseColors.blue_dark_800.background,
      secondary: baseColors.blue_dark_900.background,
      focus: baseColors.blue_dark_600.background,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
    geofencingZones: {
      Allowed: {
        color: baseColors.blue_nfk_500,
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
