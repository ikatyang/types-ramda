import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
declare const pick: pick_00;
type pick_00 = {
    <T, K extends keyof T>(keys: List<K>): pick_pick_10<T, K>;
    (keys: List<Property>): pick_partial_10;
    <T>(_keys: PH, object: T): pick_01<T>;
    <T, K extends keyof T>(keys: List<K>, object: T): pick_pick_11<T, K>;
    <T>(keys: List<Property>, object: T): pick_partial_11<T>;
};
type pick_01<T> = {
    <K extends keyof T>(keys: List<K>): pick_pick_11<T, K>;
    (keys: List<Property>): pick_partial_11<T>;
};
type pick_pick_10<T, K extends keyof T> = {
    (object: T): pick_pick_11<T, K>;
};
type pick_partial_10 = {
    <T>(object: T): pick_partial_11<T>;
};
type pick_pick_11<T, K extends keyof T> = Pick<T, K>;
type pick_partial_11<T> = Partial<T>;
export = pick;
