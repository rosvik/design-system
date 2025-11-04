import {FontBook, TextStyle, TextTypeStyles} from './types';

const SEMIBOLD_WEIGHT = '600';

const xSmallBase: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 0,
};
const smallBase: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  letterSpacing: -0.15,
};
const mediumBase: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  letterSpacing: -0.3,
};
const largeBase: TextStyle = {
  fontSize: 20,
  lineHeight: 24,
  letterSpacing: -0.3,
};
const xLargeBase: TextStyle = {
  fontSize: 24,
  lineHeight: 28,
  letterSpacing: -0.3,
};
const xxLargeBase: TextStyle = {
  fontSize: 32,
  lineHeight: 36,
  letterSpacing: -0.3,
};
const xxxLargeBase: TextStyle = {
  fontSize: 36,
  lineHeight: 44,
  letterSpacing: -0.3,
};

export const iosFontData: FontBook = {
  main: {
    fontFamily: `'SF Pro Text', -apple-system, BlinkMacSystemFont`,
  },
};

export const iosTextTypeStyles: TextTypeStyles = {
  body__m: {
    ...mediumBase,
  },
  body__m__strong: {
    ...mediumBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  body__m__underline: {
    ...mediumBase,
    textDecorationLine: 'underline',
  },
  body__m__strike: {
    ...mediumBase,
    textDecorationLine: 'line-through',
  },
  body__s: {
    ...smallBase,
  },
  body__s__strong: {
    ...smallBase,
    fontWeight: SEMIBOLD_WEIGHT,
  },
  body__xs: {
    ...xSmallBase,
  },
  body__xs__strike: {
    ...xSmallBase,
    textDecorationLine: 'line-through',
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
