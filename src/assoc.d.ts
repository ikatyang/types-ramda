import { Property } from "./$types";
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
    <K extends string>(property: K): assoc_extend_100<K>;
    (property: Property): assoc_general_100;
    <K extends string, V>(property: K, value: V): assoc_extend_110<K, V>;
    (property: Property, value: any): assoc_general_110;
    <K extends string, V, T>(property: K, value: V, object: T): assoc_extend_111<K, V, T>;
    <$SEL extends "1", $KIND extends "extend">(): <K extends string>(property: K) => assoc_extend_100<K>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => assoc_general_100;
    <$SEL extends "11", $KIND extends "extend">(): <K extends string, V>(property: K, value: V) => assoc_extend_110<K, V>;
    <$SEL extends "11", $KIND extends "general">(): (property: Property, value: any) => assoc_general_110;
    <$SEL extends "111", $KIND extends "extend">(): <K extends string, V, T>(property: K, value: V, object: T) => assoc_extend_111<K, V, T>;
    <$SEL extends "111", $KIND extends "general">(): <T>(property: Property, value: any, object: T) => assoc_general_111<T>;
    <T>(property: Property, value: any, object: T): assoc_general_111<T>;
};
type assoc_001<T> = {
    <K extends string>(property: K): assoc_extend_101<K, T>;
    (property: Property): assoc_general_101<T>;
    <K extends string, V>(property: K, value: V): assoc_extend_111<K, V, T>;
    <$SEL extends "1", $KIND extends "extend">(): <K extends string>(property: K) => assoc_extend_101<K, T>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => assoc_general_101<T>;
    <$SEL extends "11", $KIND extends "extend">(): <K extends string, V>(property: K, value: V) => assoc_extend_111<K, V, T>;
    <$SEL extends "11", $KIND extends "general">(): (property: Property, value: any) => assoc_general_111<T>;
    (property: Property, value: any): assoc_general_111<T>;
};
type assoc_extend_100<K extends string> = {
    <V>(value: V): assoc_extend_110<K, V>;
    <$SEL extends "1">(): <V>(value: V) => assoc_extend_110<K, V>;
    <$SEL extends "11">(): <V, T>(value: V, object: T) => assoc_extend_111<K, V, T>;
    <V, T>(value: V, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_100 = {
    (value: any): assoc_general_110;
    <$SEL extends "1">(): (value: any) => assoc_general_110;
    <$SEL extends "11">(): <T>(value: any, object: T) => assoc_general_111<T>;
    <T>(value: any, object: T): assoc_general_111<T>;
};
type assoc_extend_010<V> = {
    <K extends string>(property: K): assoc_extend_110<K, V>;
    <$SEL extends "1">(): <K extends string>(property: K) => assoc_extend_110<K, V>;
    <$SEL extends "11">(): <K extends string, T>(property: K, object: T) => assoc_extend_111<K, V, T>;
    <K extends string, T>(property: K, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_010 = {
    (property: Property): assoc_general_110;
    <$SEL extends "1">(): (property: Property) => assoc_general_110;
    <$SEL extends "11">(): <T>(property: Property, object: T) => assoc_general_111<T>;
    <T>(property: Property, object: T): assoc_general_111<T>;
};
type assoc_extend_110<K extends string, V> = {
    <T>(object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_110 = {
    <T>(object: T): assoc_general_111<T>;
};
type assoc_extend_101<K extends string, T> = {
    <V>(value: V): assoc_extend_111<K, V, T>;
};
type assoc_general_101<T> = {
    (value: any): assoc_general_111<T>;
};
type assoc_extend_011<V, T> = {
    <K extends string>(property: K): assoc_extend_111<K, V, T>;
};
type assoc_general_011<T> = {
    (property: Property): assoc_general_111<T>;
};
type assoc_extend_111<K extends string, V, T> = T & Record<K, V>;
type assoc_general_111<T> = T;
export = assoc;
