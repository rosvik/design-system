import merge from 'ts-deepmerge';
import {TextTypeStyles} from '../typo';
import {ConfigurationOverride, overrideConfig} from '../utils/override-config';

import {androidTextTypeStyles} from './android';
import {iosTextTypeStyles} from './ios';

type PlatformTypes = 'ios' | 'android';

export * from './types';
export {androidTextTypeStyles, iosTextTypeStyles};

export const textTypeStyles = {
  android: androidTextTypeStyles,
  ios: iosTextTypeStyles,
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
  type: PlatformTypes = 'android',
  overrides?: ConfigurationOverride<TextTypeStyles>,
) {
  if (!overrides) return textTypeStyles[type];
  return overrideConfig(textTypeStyles[type], overrides);
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
  return merge(textTypeStyles[type], extension);
}
