import {FontBook, TextStyle, TextTypeStyles} from './types';

const REGULAR_WEIGHT = '400';
const MEDIUM_WEIGHT = '500';
const SEMIBOLD_WEIGHT = '600';

const xSmallBase: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 0.3,
};
const smallBase: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  letterSpacing: 0.25,
};
const mediumBase: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  letterSpacing: 0.1,
};
const largeBase: TextStyle = {
  fontSize: 20,
  lineHeight: 24,
  letterSpacing: 0.3,
};
const xLargeBase: TextStyle = {
  fontSize: 24,
  lineHeight: 28,
  letterSpacing: 0.3,
};
const xxLargeBase: TextStyle = {
  fontSize: 32,
  lineHeight: 38,
  letterSpacing: 0.5,
};
const xxxLargeBase: TextStyle = {
  fontSize: 36,
  lineHeight: 40,
  letterSpacing: 0.5,
};

export const androidFontData: FontBook = {
  main: {
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap',
    fontFamily: `'Roboto', sans-serif`,
  },
};

export const androidTextTypeStyles: TextTypeStyles = {
  body__m: {
    ...mediumBase,
    fontWeight: REGULAR_WEIGHT,
  },
  body__m__strong: {
    ...mediumBase,
    fontWeight: MEDIUM_WEIGHT,
  },
  body__m__underline: {
    ...mediumBase,
    textDecorationLine: 'underline',
    fontWeight: REGULAR_WEIGHT,
  },
  body__m__strike: {
    ...mediumBase,
    textDecorationLine: 'line-through',
    fontWeight: REGULAR_WEIGHT,
  },
  body__s: {
    ...smallBase,
    fontWeight: REGULAR_WEIGHT,
  },
  body__s__strong: {
    ...smallBase,
    fontWeight: MEDIUM_WEIGHT,
  },
  body__xs: {
    ...xSmallBase,
    fontWeight: REGULAR_WEIGHT,
  },
  body__xs__strike: {
    ...xSmallBase,
    textDecorationLine: 'line-through',
    fontWeight: REGULAR_WEIGHT,
  },
  heading__3xl: {
    ...xxxLargeBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  heading__2xl: {
    ...xxLargeBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  heading__xl: {
    ...xLargeBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  heading__l: {
    ...largeBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  heading__m: {
    ...mediumBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  heading__s: {
    ...smallBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  heading__xs: {
    ...xSmallBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
};
