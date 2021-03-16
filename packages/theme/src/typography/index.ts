import merge from 'ts-deepmerge';
import {TextTypeStyles} from '.';
import {ConfigurationOverride, overrideConfig} from '../utils/override-config';

import {androidTextTypeStyles, androidFontData} from './android';
import {iosTextTypeStyles, iosFontData} from './ios';

type _MappedPlatforms = 'ios' | 'android';
type PlatformTypes = _MappedPlatforms | 'web';
const mapType = (a: PlatformTypes): _MappedPlatforms =>
  a === 'ios' ? 'ios' : 'android';

export * from './types';

export const textTypeStyles = {
  android: androidTextTypeStyles,
  ios: iosTextTypeStyles,
};

export const fonts = {
  android: androidFontData,
  ios: iosFontData,
};

/**
 * Get fonts for platform. Web should use Android as platform.
 *
 * @param overrides - Properties to override base config with
 * @returns text type styles
 */
export function getFontBook(type: PlatformTypes) {
  return fonts[mapType(type)];
}

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
  type: PlatformTypes,
  overrides?: ConfigurationOverride<TextTypeStyles>,
) {
  if (!overrides) return textTypeStyles[mapType(type)];
  return overrideConfig(textTypeStyles[mapType(type)], overrides);
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
export function extendTextTypeStyles<T>(type: PlatformTypes, extension: T) {
  return merge(textTypeStyles[mapType(type)], extension);
}
