import { Placeholder as PH } from "./$placeholder";
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
declare const mergeWith: mergeWith_000;
type mergeWith_000 = {
    <V>(fn: (a: V, b: V) => any): mergeWith_100<V>;
    (_fn: PH, left: object): mergeWith_010;
    <V>(fn: (a: V, b: V) => any, left: object): mergeWith_110<V>;
    (_fn: PH, _left: PH, right: object): mergeWith_001;
    (_fn: PH, left: object, right: object): mergeWith_011;
    <V>(fn: (a: V, b: V) => any, _left: PH, right: object): mergeWith_101<V>;
    <$SEL extends "1">(): <V>(fn: (a: V, b: V) => any) => mergeWith_100<V>;
    <$SEL extends "01">(): (_fn: PH, left: object) => mergeWith_010;
    <$SEL extends "11">(): <V>(fn: (a: V, b: V) => any, left: object) => mergeWith_110<V>;
    <$SEL extends "001">(): (_fn: PH, _left: PH, right: object) => mergeWith_001;
    <$SEL extends "011">(): (_fn: PH, left: object, right: object) => mergeWith_011;
    <$SEL extends "101">(): <V>(fn: (a: V, b: V) => any, _left: PH, right: object) => mergeWith_101<V>;
    <$SEL extends "111">(): <V>(fn: (a: V, b: V) => any, left: object, right: object) => mergeWith_111;
    <V>(fn: (a: V, b: V) => any, left: object, right: object): mergeWith_111;
};
type mergeWith_100<V> = {
    (left: object): mergeWith_110<V>;
    (_left: PH, right: object): mergeWith_101<V>;
    <$SEL extends "1">(): (left: object) => mergeWith_110<V>;
    <$SEL extends "01">(): (_left: PH, right: object) => mergeWith_101<V>;
    <$SEL extends "11">(): (left: object, right: object) => mergeWith_111;
    (left: object, right: object): mergeWith_111;
};
type mergeWith_010 = {
    <V>(fn: (a: V, b: V) => any): mergeWith_110<V>;
    (_fn: PH, right: object): mergeWith_011;
    <$SEL extends "1">(): <V>(fn: (a: V, b: V) => any) => mergeWith_110<V>;
    <$SEL extends "01">(): (_fn: PH, right: object) => mergeWith_011;
    <$SEL extends "11">(): <V>(fn: (a: V, b: V) => any, right: object) => mergeWith_111;
    <V>(fn: (a: V, b: V) => any, right: object): mergeWith_111;
};
type mergeWith_110<V> = {
    (right: object): mergeWith_111;
};
type mergeWith_001 = {
    <V>(fn: (a: V, b: V) => any): mergeWith_101<V>;
    (_fn: PH, left: object): mergeWith_011;
    <$SEL extends "1">(): <V>(fn: (a: V, b: V) => any) => mergeWith_101<V>;
    <$SEL extends "01">(): (_fn: PH, left: object) => mergeWith_011;
    <$SEL extends "11">(): <V>(fn: (a: V, b: V) => any, left: object) => mergeWith_111;
    <V>(fn: (a: V, b: V) => any, left: object): mergeWith_111;
};
type mergeWith_101<V> = {
    (left: object): mergeWith_111;
};
type mergeWith_011 = {
    <V>(fn: (a: V, b: V) => any): mergeWith_111;
};
type mergeWith_111 = object;
export = mergeWith;
