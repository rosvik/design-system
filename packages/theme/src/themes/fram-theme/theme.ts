import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';

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

const themes: Themes = {
  light: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: contrastColor('#005685', 'light'),
        hover: contrastColor('#007FBA', 'light'),
        active: contrastColor('#CDE9E3', 'dark'),
        disabled: contrastColor('#C7CACC', 'dark'),
        outline: contrastColor('#0D6569', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_1: {
        default: contrastColor('555E65', 'light'),
        hover: contrastColor('6F777D', 'light'),
        active: contrastColor('1A2024', 'light'),
        disabled: contrastColor('#C7CACC', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_2: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#D4E9EC', 'dark'),
        active: contrastColor('#A6D1D9', 'dark'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_3: {
        default: contrastColor('#82B962', 'dark'),
        hover: contrastColor('#B8D4A8', 'dark'),
        active: contrastColor('#284320', 'light'),
        disabled: contrastColor('#D8E4D3', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
      interactive_destructive: {
        default: contrastColor('#F18176', 'dark'),
        hover: contrastColor('#EFB8B2', 'dark'),
        active: contrastColor('#551125', 'light'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A51140', 'light'),
      },
    },
    static: {
      background: {
        background_0: contrastColor('#FFFFFF', 'dark'),
        background_1: contrastColor('#F1F2F2', 'dark'),
        background_2: contrastColor('#E3E5E6', 'dark'),
        background_3: contrastColor('#D5D7D9', 'dark'),
        background_accent_0: contrastColor('#37424A', 'light'),
        background_accent_1: contrastColor('#555E65', 'light'),
        background_accent_2: contrastColor('#CDE9E3', 'dark'),
        background_accent_3: contrastColor('#0D6569', 'light'),
        background_accent_4: contrastColor('#F0E991', 'dark'),
        background_accent_5: contrastColor('#A6D1D9', 'dark'),
      },
      transport: {
        transport_city: contrastColor('#82B962', 'dark'),
        transport_region: contrastColor('#005685', 'light'),
        transport_airport_express: contrastColor('#005685', 'light'),
        transport_boat: contrastColor('#007FBA', 'light'),
        transport_train: contrastColor('#551125', 'light'),
        transport_airport: contrastColor('#F15659', 'light'),
        transport_plane: contrastColor('#F15659', 'light'),
        transport_flexible: contrastColor('#F15659', 'light'),
        transport_other: contrastColor('#555E65', 'light'),
      },
      status: {
        valid: contrastColor('#82B962', 'dark'),
        info: contrastColor('#005685', 'light'),
        warning: contrastColor('#FBDC00', 'dark'),
        error: contrastColor('#F15629', 'light'),
      },
      zone_selection: {
        from: contrastColor('#82B962', 'dark'),
        to: contrastColor('#005685', 'light'),
      },
    },

    text: {
      colors: {
        primary: textColors.dark,
        secondary: '#555E65',
        disabled: '#A9AEB1',
      },
    },
    border: {
      primary: '#E7E8E9',
      secondary: '#000000',
      focus: '#005685',
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
        default: contrastColor('#76A4C0', 'dark'),
        hover: contrastColor('#AAC6D8', 'dark'),
        active: contrastColor('#CDE9E3', 'dark'),
        disabled: contrastColor('#C7CACC', 'dark'),
        outline: contrastColor('#0D6569', 'light'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_1: {
        default: contrastColor('555E65', 'light'),
        hover: contrastColor('6F777D', 'light'),
        active: contrastColor('1A2024', 'light'),
        disabled: contrastColor('#C7CACC', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_2: {
        default: contrastColor('#000000', 'light'),
        hover: contrastColor('#0D6569', 'light'),
        active: contrastColor('#679C9F', 'light'),
        disabled: contrastColor('#C7CACC', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_3: {
        default: contrastColor('#82B962', 'dark'),
        hover: contrastColor('#B8D4A8', 'dark'),
        active: contrastColor('#284320', 'light'),
        disabled: contrastColor('#D8E4D3', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
      interactive_destructive: {
        default: contrastColor('#F18176', 'dark'),
        hover: contrastColor('#EFB8B2', 'dark'),
        active: contrastColor('#551125', 'light'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#D692A7', 'dark'),
      },
    },
    static: {
      background: {
        background_0: contrastColor('#000000', 'light'),
        background_1: contrastColor('#242B30', 'light'),
        background_2: contrastColor('#37424A', 'light'),
        background_3: contrastColor('#555E65', 'light'),
        background_accent_0: contrastColor('#37424A', 'light'),
        background_accent_1: contrastColor('#555E65', 'light'),
        background_accent_2: contrastColor('#CDE9E3', 'dark'),
        background_accent_3: contrastColor('#0D6569', 'light'),
        background_accent_4: contrastColor('#F0E991', 'dark'),
        background_accent_5: contrastColor('#242B30', 'light'),
      },

      transport: {
        transport_city: contrastColor('#82B962', 'dark'),
        transport_region: contrastColor('#005685', 'light'),
        transport_airport_express: contrastColor('#005685', 'light'),
        transport_boat: contrastColor('#007FBA', 'light'),
        transport_train: contrastColor('#551125', 'light'),
        transport_airport: contrastColor('#F15659', 'light'),
        transport_plane: contrastColor('#F15659', 'light'),
        transport_flexible: contrastColor('#F15659', 'light'),
        transport_other: contrastColor('#555E65', 'light'),
      },
      status: {
        valid: contrastColor('#82B962', 'dark'),
        info: contrastColor('#005685', 'light'),
        warning: contrastColor('#FBDC00', 'dark'),
        error: contrastColor('#F15629', 'light'),
      },
      zone_selection: {
        from: contrastColor('#82B962', 'dark'),
        to: contrastColor('#005685', 'light'),
      },
    },
    text: {
      colors: {
        primary: textColors.light,
        secondary: '#F1F2F2',
        disabled: '#A9AEB1',
      },
    },
    border: {
      primary: '#242B30',
      secondary: '#FFFFFF',
      focus: '#005685',
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
