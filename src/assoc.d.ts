import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
declare const assoc: assoc_000;
type assoc_000 = {
    <T>(_property: PH, _value: PH, object: T): assoc_001<T>;
    <V, T>(_property: PH, value: V, object: T): assoc_extend_011<V, T>;
    <T>(_property: PH, value: any, object: T): assoc_remain_011<T>;
    <K extends string, T>(property: K, _value: PH, object: T): assoc_extend_101<K, T>;
    <T>(property: Property, _value: PH, object: T): assoc_remain_101<T>;
    <K extends string, V, T>(property: K, value: V, object: T): assoc_extend_111<K, V, T>;
    <T>(property: Property, value: any, object: T): assoc_remain_111<T>;
    <V>(_property: PH, value: V): assoc_extend_010<V>;
    (_property: PH, value: any): assoc_remain_010;
    <K extends string, V>(property: K, value: V): assoc_extend_110<K, V>;
    (property: Property, value: any): assoc_remain_110;
    <K extends string>(property: K): assoc_extend_100<K>;
    (property: Property): assoc_remain_100;
};
type assoc_001<T> = {
    <V>(_property: PH, value: V): assoc_extend_011<V, T>;
    (_property: PH, value: any): assoc_remain_011<T>;
    <K extends string, V>(property: K, value: V): assoc_extend_111<K, V, T>;
    (property: Property, value: any): assoc_remain_111<T>;
    <K extends string>(property: K): assoc_extend_101<K, T>;
    (property: Property): assoc_remain_101<T>;
};
type assoc_extend_100<K extends string> = {
    <T>(_value: PH, object: T): assoc_extend_101<K, T>;
    <V, T>(value: V, object: T): assoc_extend_111<K, V, T>;
    <V>(value: V): assoc_extend_110<K, V>;
};
type assoc_remain_100 = {
    <T>(_value: PH, object: T): assoc_remain_101<T>;
    <T>(value: any, object: T): assoc_remain_111<T>;
    (value: any): assoc_remain_110;
};
type assoc_extend_010<V> = {
    <T>(_property: PH, object: T): assoc_extend_011<V, T>;
    <K extends string, T>(property: K, object: T): assoc_extend_111<K, V, T>;
    <K extends string>(property: K): assoc_extend_110<K, V>;
};
type assoc_remain_010 = {
    <T>(_property: PH, object: T): assoc_remain_011<T>;
    <T>(property: Property, object: T): assoc_remain_111<T>;
    (property: Property): assoc_remain_110;
};
type assoc_extend_110<K extends string, V> = {
    <T>(object: T): assoc_extend_111<K, V, T>;
};
type assoc_remain_110 = {
    <T>(object: T): assoc_remain_111<T>;
};
type assoc_extend_101<K extends string, T> = {
    <V>(value: V): assoc_extend_111<K, V, T>;
};
type assoc_remain_101<T> = {
    (value: any): assoc_remain_111<T>;
};
type assoc_extend_011<V, T> = {
    <K extends string>(property: K): assoc_extend_111<K, V, T>;
};
type assoc_remain_011<T> = {
    (property: Property): assoc_remain_111<T>;
};
type assoc_extend_111<K extends string, V, T> = T & Record<K, V>;
type assoc_remain_111<T> = T;
export = assoc;
