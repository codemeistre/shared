/** A class declaration, i.e., functions that could be called with `new` */
interface Constructor<T = unknown> extends Function {
  new (...args: any[]): T;
}

/**
 * Following https://nodejs.org/api/util.html#util_util_isnull_object
 * @param value
 * @returns `true` if `value` is strictly `null`. `false` otherwise.
 */
export const isNull = <T>(value: T | null | undefined): value is null => value === null;

/**
 * Following https://nodejs.org/api/util.html#util_util_isundefined_object
 * @param value
 * @returns `true` if `value` is strictly `undefined`. `false` otherwise.
 */
export const isUndefined = <T>(value: T | null | undefined): value is undefined =>
  value === undefined;

/**
 * @param value
 * @returns `true` if `value` is 'nullish' ie., is strictly `null` or `undefined`.
 * `false` otherwise.
 */
export const isNullOrUndefined = <T>(value: T | null | undefined): value is null | undefined =>
  isNull(value) || isUndefined(value);

/**
 * Following https://nodejs.org/api/util.html#util_util_isnumber_object
 * @param value
 * @returns `true` if `value` has the type of `number`. `false` otherwise.
 */
export const isNumber = (value: unknown): value is number => typeof value === 'number';

/**
 * @param value
 * @returns `true` if `value` has the type of `boolean`. `false` otherwise.
 */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

/**
 * Following https://nodejs.org/api/util.html#util_util_isfunction_object
 *
 * This is not checking if the value `value` is constructable, i.e., can be called
 * with `new`. More about this here {@link https://stackoverflow.com/a/40922715/5290447}
 * @param value
 * @returns `true` if `value` has the type of `function`. `false` otherwise.
 */
export const isConstructor = (value: unknown): value is Constructor => typeof value === 'function';

/**
 * Following https://nodejs.org/api/util.html#util_util_isstring_object
 * @param value
 * @returns `true` if `value` has the type of `string`, ie., is a literal string.
 * `false` otherwise.
 */
export const isString = (value: unknown): value is string => typeof value === 'string';
