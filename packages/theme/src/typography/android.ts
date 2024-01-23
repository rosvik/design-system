import {FontBook, TextStyle, TextTypeStyles} from './types';

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
const labelBase: TextStyle = {
  fontSize: 10,
  lineHeight: 16,
  letterSpacing: 0,
};

export const androidFontData: FontBook = {
  main: {
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
    fontFamily: `'Roboto', sans-serif`,
  },
};

export const androidTextTypeStyles: TextTypeStyles = {
  body__primary: primaryBase,
  'body__primary--bold': {
    ...primaryBase,
    fontWeight: '500',
  },
  'body__primary--strike': {
    ...primaryBase,
    textDecorationLine: 'line-through',
  },
  'body__primary--underline': {
    ...primaryBase,
    textDecorationLine: 'underline',
  },
  'body__primary--big': {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.25,
  },
  'body__primary--big--bold': {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.25,
    fontWeight: 'bold',
  },
  'body__primary--jumbo': {
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0.25,
  },
  'body__primary--jumbo--bold': {
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0.25,
    fontWeight: 'bold',
  },
  body__secondary: secondaryBase,
  'body__secondary--bold': {
    ...secondaryBase,
    fontWeight: '500',
  },
  body__tertiary: tertiaryBase,
  'body__tertiary--bold': {
    ...tertiaryBase,
    fontWeight: '500',
  },
  'body__tertiary--strike': {
    ...tertiaryBase,
    textDecorationLine: 'line-through',
  },
  'body__tertiary--uppercase': {
    ...primaryBase,
    textTransform: 'uppercase',
  },
  heading__title: {
    ...primaryBase,
    fontWeight: 'bold',
  },
  heading__component: {
    ...primaryBase,
    fontWeight: '500',
  },
  heading__paragraph: {
    ...primaryBase,
    fontWeight: '500',
  },
  'heading--medium': {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
  'heading--big': {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: -0.31,
    fontWeight: 'bold',
  },
  'heading--jumbo': {
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.31,
    fontWeight: 'bold',
  },
  label__uppercase: {
    ...labelBase,
    textTransform: 'uppercase',
  },
};
