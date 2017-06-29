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
    <V, T>(fn: (a: V, b: V) => any, left: object, right: object): mergeWith_111<T>;
    <V>(fn: (a: V, b: V) => any, left: object): mergeWith_110<V>;
    <V>(fn: (a: V, b: V) => any): mergeWith_100<V>;
};
type mergeWith_100<V> = {
    <T>(left: object, right: object): mergeWith_111<T>;
    (left: object): mergeWith_110<V>;
};
type mergeWith_010 = {
    <V, T>(fn: (a: V, b: V) => any, right: object): mergeWith_111<T>;
    <V>(fn: (a: V, b: V) => any): mergeWith_110<V>;
};
type mergeWith_110<V> = {
    <T>(right: object): mergeWith_111<T>;
};
type mergeWith_001 = {
    <V, T>(fn: (a: V, b: V) => any, left: object): mergeWith_111<T>;
    <V>(fn: (a: V, b: V) => any): mergeWith_101<V>;
};
type mergeWith_101<V> = {
    <T>(left: object): mergeWith_111<T>;
};
type mergeWith_011 = {
    <V, T>(fn: (a: V, b: V) => any): mergeWith_111<T>;
};
type mergeWith_111<T> = T;
export = mergeWith;
