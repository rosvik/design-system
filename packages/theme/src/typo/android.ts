import {TextStyle, TextTypeStyles} from './types';

const primaryBase: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  letterSpacing: 0.5,
};
const secondaryBase: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.25,
};
const tertiaryBase: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 0.4,
};

export const androidTextTypeStyles: TextTypeStyles = {
  body__primary: primaryBase,
  'body__primary--bold': {
    ...primaryBase,
    fontWeight: '600',
  },
  'body__primary--underline': {
    ...primaryBase,
    textDecorationLine: 'underline',
  },
  'body__primary--jumbo': {
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0.25,
  },
  body__secondary: secondaryBase,
  'body__secondary--bold': {
    ...secondaryBase,
    fontWeight: '600',
  },
  body__tertiary: tertiaryBase,
  'body__tertiary--strike': {
    ...tertiaryBase,
    textDecorationLine: 'line-through',
  },
  heading__title: {
    ...primaryBase,
    fontWeight: 'bold',
  },
  heading__component: {
    ...primaryBase,
    fontWeight: '600',
  },
  heading__paragraph: {
    ...primaryBase,
    fontWeight: '600',
  },
};
