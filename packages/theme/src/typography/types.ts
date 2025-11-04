export const textNames = [
  'body__m',
  'body__m__strong',
  'body__m__underline',
  'body__m__strike',
  'body__s',
  'body__s__strong',
  'body__xs',
  'body__xs__strike',
  'heading__3xl',
  'heading__2xl',
  'heading__xl',
  'heading__l',
  'heading__m',
  'heading__s',
  'heading__xs',
] as const;

export type FontMetadata = {
  url?: string;
  fontFamily: string;
};
export type FontBook = {
  main: FontMetadata;
  [fontName: string]: FontMetadata;
};

export type TextNames = (typeof textNames)[number];

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
