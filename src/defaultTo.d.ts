import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
declare const defaultTo: defaultTo_00;
type defaultTo_00 = {
    <U>(_defaults: PH, value: U): defaultTo_01<U>;
    <T, U>(defaults: T | null | undefined, value: U): defaultTo_11<T, U>;
    <$SEL extends "11">(): <T, U>(defaults: T | null | undefined, value: U) => defaultTo_11<T, U>;
    <$SEL extends "1">(): <T>(defaults: T | null | undefined) => defaultTo_10<T>;
    <$SEL extends "01">(): <U>(_defaults: PH, value: U) => defaultTo_01<U>;
    <T>(defaults: T | null | undefined): defaultTo_10<T>;
};
type defaultTo_10<T> = {
    <U>(value: U): defaultTo_11<T, U>;
};
type defaultTo_01<U> = {
    <T>(defaults: T | null | undefined): defaultTo_11<T, U>;
};
type defaultTo_11<T, U> = T | U;
export = defaultTo;
