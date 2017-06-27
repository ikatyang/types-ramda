import { KeyedObjectMorphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
declare const pickBy: pickBy_00;
type pickBy_00 = {
    <T>(_fn: PH, object: T): pickBy_remain_01<T>;
    (_fn: PH, object: any): pickBy_manual_01;
    <T>(fn: KeyedObjectMorphism<any, boolean, string>, object: T): pickBy_remain_11<T>;
    <V>(fn: KeyedObjectMorphism<any, boolean, string>, object: any): pickBy_manual_11<V>;
    (fn: KeyedObjectMorphism<any, boolean, string>): pickBy_10;
};
type pickBy_10 = {
    <T>(object: T): pickBy_remain_11<T>;
    <V>(object: any): pickBy_manual_11<V>;
};
type pickBy_remain_01<T> = {
    (fn: KeyedObjectMorphism<any, boolean, string>): pickBy_remain_11<T>;
};
type pickBy_manual_01 = {
    <V>(fn: KeyedObjectMorphism<any, boolean, string>): pickBy_manual_11<V>;
};
type pickBy_remain_11<T> = T;
type pickBy_manual_11<V> = V;
export = pickBy;
