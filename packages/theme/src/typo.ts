import merge from 'ts-deepmerge';
import {ConfigurationOverride, overrideConfig} from './utils/override-config';

export const textNames = [
  'heroTitle',
  'pageTitle',
  'sectionHeadline',
  'itemHeadline',
  'paragraphHeadline',
  'body',
  'lead',
  'label',
] as const;

export type TextNames = typeof textNames[number];

export type TextStyle = {
  fontSize: number;
  lineHeight: number;
  fontWeight?: string;
};

export type TextTypeStyles = {[key in TextNames]: TextStyle};

export const textTypeStyles: TextTypeStyles = {
  heroTitle: {fontSize: 32, lineHeight: 40},
  pageTitle: {fontSize: 26, lineHeight: 32},
  sectionHeadline: {fontSize: 23, lineHeight: 28},
  itemHeadline: {fontSize: 20, lineHeight: 24},
  paragraphHeadline: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
  body: {fontSize: 16, lineHeight: 20},
  lead: {fontSize: 14, lineHeight: 20},
  label: {fontSize: 12, lineHeight: 16},
};

/**
 * Create new text type style with optinally overriden defaults.
 *
 * @example extending nested features
 * ```ts
 * createTextTypeStyles({
 *   paragraphHeadline: {
 *     fontWeight: Platform.select({ios: '600', android: 'bold'})
 *   }
 * })
 * ```
 *
 * @param overrides - Properties to override base config with
 * @returns text type styles
 */
export function createTextTypeStyles(
  overrides?: ConfigurationOverride<TextTypeStyles>,
) {
  if (!overrides) return textTypeStyles;
  return overrideConfig(textTypeStyles, overrides);
}

/**
 * Use text type style as base and extend with new properties. Properties
 * can be nested and will be deep merged.
 *
 * @example extending nested features
 * ```ts
 * type Foo = {
 *   paragraphHeadline: {
 *     additional: boolean;
 *   };
 * };
 * const foo = extendTextTypeStyles<Foo>({
 *   paragraphHeadline: {
 *     additional: true,
 *   },
 * });
 *
 *
 * console.log(foo.paragraphHeadline.additional);
 * //=> (property) additional: boolean
 * ```
 *
 * @param extension - Object to extend original text type style. Can be nested with same keys as style
 * @returns new deep merged intersection
 */
export function extendTextTypeStyles<T>(extension: T) {
  return merge(textTypeStyles, extension);
}
