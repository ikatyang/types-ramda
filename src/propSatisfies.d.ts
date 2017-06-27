import { Predicate, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
declare const propSatisfies: propSatisfies_000;
type propSatisfies_000 = {
    <T, K extends keyof T>(fn: Predicate<T[K]>, _key: PH, object: T): propSatisfies_keyof_101<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, _key: PH, object: T): propSatisfies_record_101<K, T>;
    <V>(fn: Predicate<V>, _key: PH, object: any): propSatisfies_manual_101<V>;
    <T, K extends keyof T>(_fn: PH, key: K, object: T): propSatisfies_keyof_011<T, K>;
    <T>(_fn: PH, _key: PH, object: T): propSatisfies_keyof_001<T>;
    <K extends string, T extends Record<K, any>>(_fn: PH, key: K, object: T): propSatisfies_record_011<K, T>;
    <K extends string, T extends Record<K, any>>(_fn: PH, _key: PH, object: T): propSatisfies_record_001<K, T>;
    (_fn: PH, key: Property, object: any): propSatisfies_manual_011;
    (_fn: PH, _key: PH, object: any): propSatisfies_manual_001;
    <T, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_keyof_111<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_record_111<K, T>;
    <V>(fn: Predicate<V>, key: Property, object: any): propSatisfies_manual_111<V>;
    <T, K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_010<T, K>;
    <K extends string>(_fn: PH, key: K): propSatisfies_record_010<K>;
    (_fn: PH, key: Property): propSatisfies_manual_010;
    <T, K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_110<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K): propSatisfies_record_110<K, T>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_manual_110<V>;
    <T, K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_100<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_100<K, T>;
    <V>(fn: Predicate<V>): propSatisfies_manual_100<V>;
};
type propSatisfies_keyof_100<T, K extends keyof T> = {
    (_key: PH, object: T): propSatisfies_keyof_101<T, K>;
    (key: K, object: T): propSatisfies_keyof_111<T, K>;
    (key: K): propSatisfies_keyof_110<T, K>;
};
type propSatisfies_record_100<K extends string, T extends Record<K, any>> = {
    (_key: PH, object: T): propSatisfies_record_101<K, T>;
    (key: K, object: T): propSatisfies_record_111<K, T>;
    (key: K): propSatisfies_record_110<K, T>;
};
type propSatisfies_manual_100<V> = {
    (_key: PH, object: any): propSatisfies_manual_101<V>;
    (key: Property, object: any): propSatisfies_manual_111<V>;
    (key: Property): propSatisfies_manual_110<V>;
};
type propSatisfies_keyof_010<T, K extends keyof T> = {
    (_fn: PH, object: T): propSatisfies_keyof_011<T, K>;
    (fn: Predicate<T[K]>, object: T): propSatisfies_keyof_111<T, K>;
    (fn: Predicate<T[K]>): propSatisfies_keyof_110<T, K>;
};
type propSatisfies_record_010<K extends string> = {
    <T extends Record<K, any>>(_fn: PH, object: T): propSatisfies_record_011<K, T>;
    <T extends Record<K, any>>(fn: Predicate<T[K]>, object: T): propSatisfies_record_111<K, T>;
    <T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_110<K, T>;
};
type propSatisfies_manual_010 = {
    (_fn: PH, object: any): propSatisfies_manual_011;
    <V>(fn: Predicate<V>, object: any): propSatisfies_manual_111<V>;
    <V>(fn: Predicate<V>): propSatisfies_manual_110<V>;
};
type propSatisfies_keyof_110<T, K extends keyof T> = {
    (object: T): propSatisfies_keyof_111<T, K>;
};
type propSatisfies_record_110<K extends string, T extends Record<K, any>> = {
    (object: T): propSatisfies_record_111<K, T>;
};
type propSatisfies_manual_110<V> = {
    (object: any): propSatisfies_manual_111<V>;
};
type propSatisfies_keyof_001<T> = {
    <K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_011<T, K>;
    <K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_111<T, K>;
    <K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_101<T, K>;
};
type propSatisfies_record_001<K extends string, T extends Record<K, any>> = {
    (_fn: PH, key: K): propSatisfies_record_011<K, T>;
    (fn: Predicate<T[K]>, key: K): propSatisfies_record_111<K, T>;
    (fn: Predicate<T[K]>): propSatisfies_record_101<K, T>;
};
type propSatisfies_manual_001 = {
    (_fn: PH, key: Property): propSatisfies_manual_011;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_manual_111<V>;
    <V>(fn: Predicate<V>): propSatisfies_manual_101<V>;
};
type propSatisfies_keyof_101<T, K extends keyof T> = {
    (key: K): propSatisfies_keyof_111<T, K>;
};
type propSatisfies_record_101<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_111<K, T>;
};
type propSatisfies_manual_101<V> = {
    (key: Property): propSatisfies_manual_111<V>;
};
type propSatisfies_keyof_011<T, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_111<T, K>;
};
type propSatisfies_record_011<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_111<K, T>;
};
type propSatisfies_manual_011 = {
    <V>(fn: Predicate<V>): propSatisfies_manual_111<V>;
};
type propSatisfies_keyof_111<T, K extends keyof T> = boolean;
type propSatisfies_record_111<K extends string, T extends Record<K, any>> = boolean;
type propSatisfies_manual_111<V> = boolean;
export = propSatisfies;
