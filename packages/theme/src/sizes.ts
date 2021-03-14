export const spacings = {
  xLarge: 24,
  large: 20,
  medium: 12,
  small: 8,
  xSmall: 4,
};

export const iconSizes = {
  large: 28,
  normal: 20,
  small: 10,
};

export const borderRadius = {
  circle: 20,
  regular: 8,
  small: 4,
} as const;

export const borderWidth = {
  slim: 1,
  medium: 2,
};

export type RadiusSizes = keyof typeof borderRadius;
