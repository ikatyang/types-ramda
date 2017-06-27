import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
declare const pickAll: pickAll_00;
type pickAll_00 = {
    <T>(_keys: PH, object: T): pickAll_remain_01<T>;
    (_keys: PH, object: any): pickAll_manual_01;
    <T>(keys: List<Property>, object: T): pickAll_remain_11<T>;
    <V>(keys: List<Property>, object: any): pickAll_manual_11<V>;
    (keys: List<Property>): pickAll_10;
};
type pickAll_10 = {
    <T>(object: T): pickAll_remain_11<T>;
    <V>(object: any): pickAll_manual_11<V>;
};
type pickAll_remain_01<T> = {
    (keys: List<Property>): pickAll_remain_11<T>;
};
type pickAll_manual_01 = {
    <V>(keys: List<Property>): pickAll_manual_11<V>;
};
type pickAll_remain_11<T> = T;
type pickAll_manual_11<V> = V;
export = pickAll;
