export const textNames = [
  'body__primary',
  'body__primary--strike',
  'body__primary--bold',
  'body__primary--underline',
  'body__primary--big',
  'body__primary--big--bold',
  'body__primary--jumbo',
  'body__primary--jumbo--bold',
  'body__secondary',
  'body__secondary--bold',
  'body__tertiary',
  'body__tertiary--strike',
  'heading__title',
  'heading__component',
  'heading__paragraph',
  'heading--medium',
  'heading--big',
  'heading--jumbo',
  'label__uppercase',
] as const;

export type FontMetadata = {
  url?: string;
  fontFamily: string;
};
export type FontBook = {
  main: FontMetadata;
  [fontName: string]: FontMetadata;
};

export type TextNames = typeof textNames[number];

export type TextStyle = {
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
};

export type TextTypeStyles = {[key in TextNames]: TextStyle};
