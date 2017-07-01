import { List, Property } from "./$types";
/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
declare const omit: omit_00;
type omit_00 = {
    (keys: List<Property>): omit_10;
    <T>(keys: List<Property>, object: T): omit_remain_11<T>;
    <V>(keys: List<Property>, object: any): omit_manual_11<V>;
};
type omit_10 = {
    <T>(object: T): omit_remain_11<T>;
    <V>(object: any): omit_manual_11<V>;
};
type omit_remain_01<T> = {
    (keys: List<Property>): omit_remain_11<T>;
};
type omit_manual_01 = {
    <V>(keys: List<Property>): omit_manual_11<V>;
};
type omit_remain_11<T> = T;
type omit_manual_11<V> = V;
export = omit;