import { Placeholder as PH } from "./$placeholder";
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
declare const mergeWithKey: mergeWithKey_000;
type mergeWithKey_000 = {
    <V, T>(fn: (key: string, a: V, b: V) => any, left: object, right: object): mergeWithKey_111<V, T>;
    <V>(fn: (key: string, a: V, b: V) => any, left: object): mergeWithKey_110<V>;
    <$SEL extends "111">(): <V, T>(fn: (key: string, a: V, b: V) => any, left: object, right: object) => mergeWithKey_111<V, T>;
    <$SEL extends "11">(): <V>(fn: (key: string, a: V, b: V) => any, left: object) => mergeWithKey_110<V>;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeWithKey_100<V>;
    <V>(fn: (key: string, a: V, b: V) => any): mergeWithKey_100<V>;
};
type mergeWithKey_100<V> = {
    <T>(left: object, right: object): mergeWithKey_111<V, T>;
    <$SEL extends "11">(): <T>(left: object, right: object) => mergeWithKey_111<V, T>;
    <$SEL extends "1">(): (left: object) => mergeWithKey_110<V>;
    (left: object): mergeWithKey_110<V>;
};
type mergeWithKey_010 = {
    <V, T>(fn: (key: string, a: V, b: V) => any, right: object): mergeWithKey_111<V, T>;
    <$SEL extends "11">(): <V, T>(fn: (key: string, a: V, b: V) => any, right: object) => mergeWithKey_111<V, T>;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeWithKey_110<V>;
    <V>(fn: (key: string, a: V, b: V) => any): mergeWithKey_110<V>;
};
type mergeWithKey_110<V> = {
    <T>(right: object): mergeWithKey_111<V, T>;
};
type mergeWithKey_001 = {
    <V, T>(fn: (key: string, a: V, b: V) => any, left: object): mergeWithKey_111<V, T>;
    <$SEL extends "11">(): <V, T>(fn: (key: string, a: V, b: V) => any, left: object) => mergeWithKey_111<V, T>;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeWithKey_101<V>;
    <V>(fn: (key: string, a: V, b: V) => any): mergeWithKey_101<V>;
};
type mergeWithKey_101<V> = {
    <T>(left: object): mergeWithKey_111<V, T>;
};
type mergeWithKey_011 = {
    <V, T>(fn: (key: string, a: V, b: V) => any): mergeWithKey_111<V, T>;
};
type mergeWithKey_111<V, T> = T;
export = mergeWithKey;
