import { List, Property } from "./$types";
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
declare const prop: prop_00;
type prop_00 = {
    <T extends {}, K extends keyof T>(key: K): prop_keyof_10<T, K>;
    <K extends string>(key: K): prop_record_10<K>;
    (key: Property): prop_general_10;
    <T extends {}, K extends keyof T>(key: K, object: T): prop_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): prop_record_11<K, T>;
    <T>(key: Property, object: {}): prop_general_11<T>;
};
type prop_keyof_10<T extends {}, K extends keyof T> = {
    (object: T): prop_keyof_11<T, K>;
};
type prop_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): prop_record_11<K, T>;
};
type prop_general_10 = {
    <T>(object: {}): prop_general_11<T>;
};
type prop_keyof_01<T extends {}> = {
    <K extends keyof T>(key: K): prop_keyof_11<T, K>;
};
type prop_record_01<K extends string, T extends Record<K, any>> = {
    (key: K): prop_record_11<K, T>;
};
type prop_general_01 = {
    <T>(key: Property): prop_general_11<T>;
};
type prop_keyof_11<T extends {}, K extends keyof T> = T[K];
type prop_record_11<K extends string, T extends Record<K, any>> = T[K];
type prop_general_11<T> = T | undefined;
export = prop;
