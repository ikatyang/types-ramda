import { Placeholder as PH } from "./$placeholder";
/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
declare const identical: identical_00;
type identical_00 = {
    <T>(_a: PH, b: T): identical_01<T>;
    <T$1, T$2 extends T$1 = T$1>(a: T$1, b: T$2): identical_11;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => identical_11;
    <$SEL extends "1">(): <T>(a: T) => identical_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: T) => identical_01<T>;
    <T>(a: T): identical_10<T>;
};
type identical_10<T> = {
    <T$1 extends T = T>(b: T$1): identical_11;
};
type identical_01<T> = {
    (a: T): identical_11;
};
type identical_11 = boolean;
export = identical;
