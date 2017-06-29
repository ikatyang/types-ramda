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
    <T$1, K extends keyof T, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K]>, _key: PH, object: T$2): propSatisfies_keyof_101<T$2, K>;
    <K extends string, T$1 extends Record<K, any>, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K]>, _key: PH, object: T$2): propSatisfies_record_101<K, T$2>;
    <V>(fn: Predicate<V>, _key: PH, object: any): propSatisfies_manual_101<V>;
    <T, K extends keyof T>(_fn: PH, key: K, object: T): propSatisfies_keyof_011<T, K>;
    <T>(_fn: PH, _key: PH, object: T): propSatisfies_keyof_001<T>;
    <K extends string, T extends Record<K, any>>(_fn: PH, key: K, object: T): propSatisfies_record_011<K, T>;
    <K extends string, T extends Record<K, any>>(_fn: PH, _key: PH, object: T): propSatisfies_record_001<K, T>;
    (_fn: PH, key: Property, object: any): propSatisfies_manual_011;
    (_fn: PH, _key: PH, object: any): propSatisfies_manual_001;
    <T$1, K$1 extends keyof T, T$2 extends T$1 = T$1, K$2 extends K$1 = K$1>(fn: Predicate<T$1[K$1]>, key: K$2, object: T$2): propSatisfies_keyof_111;
    <K$1 extends string, T$1 extends Record<K, any>, K$2 extends K$1 = K$1, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K$1]>, key: K$2, object: T$2): propSatisfies_record_111;
    <V>(fn: Predicate<V>, key: Property, object: any): propSatisfies_manual_111;
    <T, K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_010<T, K>;
    <K extends string>(_fn: PH, key: K): propSatisfies_record_010<K>;
    (_fn: PH, key: Property): propSatisfies_manual_010;
    <T, K$1 extends keyof T, K$2 extends K$1 = K$1>(fn: Predicate<T[K$1]>, key: K$2): propSatisfies_keyof_110<T, K$2>;
    <K$1 extends string, T extends Record<K, any>, K$2 extends K$1 = K$1>(fn: Predicate<T[K$1]>, key: K$2): propSatisfies_record_110<K$2, T>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_manual_110<V>;
    <T, K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_100<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_100<K, T>;
    <$SEL extends "111", $KIND extends "keyof">(): <T$1, K$1 extends keyof T, T$2 extends T$1 = T$1, K$2 extends K$1 = K$1>(fn: Predicate<T$1[K$1]>, key: K$2, object: T$2) => propSatisfies_keyof_111;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K$1 extends keyof T, K$2 extends K$1 = K$1>(fn: Predicate<T[K$1]>, key: K$2) => propSatisfies_keyof_110<T, K$2>;
    <$SEL extends "101", $KIND extends "keyof">(): <T$1, K extends keyof T, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K]>, _key: PH, object: T$2) => propSatisfies_keyof_101<T$2, K>;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(fn: Predicate<T[K]>) => propSatisfies_keyof_100<T, K>;
    <$SEL extends "011", $KIND extends "keyof">(): <T, K extends keyof T>(_fn: PH, key: K, object: T) => propSatisfies_keyof_011<T, K>;
    <$SEL extends "01", $KIND extends "keyof">(): <T, K extends keyof T>(_fn: PH, key: K) => propSatisfies_keyof_010<T, K>;
    <$SEL extends "001", $KIND extends "keyof">(): <T>(_fn: PH, _key: PH, object: T) => propSatisfies_keyof_001<T>;
    <$SEL extends "111", $KIND extends "record">(): <K$1 extends string, T$1 extends Record<K, any>, K$2 extends K$1 = K$1, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K$1]>, key: K$2, object: T$2) => propSatisfies_record_111;
    <$SEL extends "11", $KIND extends "record">(): <K$1 extends string, T extends Record<K, any>, K$2 extends K$1 = K$1>(fn: Predicate<T[K$1]>, key: K$2) => propSatisfies_record_110<K$2, T>;
    <$SEL extends "101", $KIND extends "record">(): <K extends string, T$1 extends Record<K, any>, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K]>, _key: PH, object: T$2) => propSatisfies_record_101<K, T$2>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>) => propSatisfies_record_100<K, T>;
    <$SEL extends "011", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_fn: PH, key: K, object: T) => propSatisfies_record_011<K, T>;
    <$SEL extends "01", $KIND extends "record">(): <K extends string>(_fn: PH, key: K) => propSatisfies_record_010<K>;
    <$SEL extends "001", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_fn: PH, _key: PH, object: T) => propSatisfies_record_001<K, T>;
    <$SEL extends "111", $KIND extends "manual">(): <V>(fn: Predicate<V>, key: Property, object: any) => propSatisfies_manual_111;
    <$SEL extends "11", $KIND extends "manual">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_manual_110<V>;
    <$SEL extends "101", $KIND extends "manual">(): <V>(fn: Predicate<V>, _key: PH, object: any) => propSatisfies_manual_101<V>;
    <$SEL extends "1", $KIND extends "manual">(): <V>(fn: Predicate<V>) => propSatisfies_manual_100<V>;
    <$SEL extends "011", $KIND extends "manual">(): (_fn: PH, key: Property, object: any) => propSatisfies_manual_011;
    <$SEL extends "01", $KIND extends "manual">(): (_fn: PH, key: Property) => propSatisfies_manual_010;
    <$SEL extends "001", $KIND extends "manual">(): (_fn: PH, _key: PH, object: any) => propSatisfies_manual_001;
    <V>(fn: Predicate<V>): propSatisfies_manual_100<V>;
};
type propSatisfies_keyof_100<T, K extends keyof T> = {
    <T$1 extends T = T>(_key: PH, object: T$1): propSatisfies_keyof_101<T$1, K>;
    <T$1 extends T = T, K$1 extends K = K>(key: K$1, object: T$1): propSatisfies_keyof_111;
    <$SEL extends "11">(): <T$1 extends T = T, K$1 extends K = K>(key: K$1, object: T$1) => propSatisfies_keyof_111;
    <$SEL extends "1">(): <K$1 extends K = K>(key: K$1) => propSatisfies_keyof_110<T, K$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_key: PH, object: T$1) => propSatisfies_keyof_101<T$1, K>;
    <K$1 extends K = K>(key: K$1): propSatisfies_keyof_110<T, K$1>;
};
type propSatisfies_record_100<K extends string, T extends Record<K, any>> = {
    <T$1 extends T = T>(_key: PH, object: T$1): propSatisfies_record_101<K, T$1>;
    <K$1 extends K = K, T$1 extends T = T>(key: K$1, object: T$1): propSatisfies_record_111;
    <$SEL extends "11">(): <K$1 extends K = K, T$1 extends T = T>(key: K$1, object: T$1) => propSatisfies_record_111;
    <$SEL extends "1">(): <K$1 extends K = K>(key: K$1) => propSatisfies_record_110<K$1, T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_key: PH, object: T$1) => propSatisfies_record_101<K, T$1>;
    <K$1 extends K = K>(key: K$1): propSatisfies_record_110<K$1, T>;
};
type propSatisfies_manual_100<V> = {
    (_key: PH, object: any): propSatisfies_manual_101<V>;
    (key: Property, object: any): propSatisfies_manual_111;
    <$SEL extends "11">(): (key: Property, object: any) => propSatisfies_manual_111;
    <$SEL extends "1">(): (key: Property) => propSatisfies_manual_110<V>;
    <$SEL extends "01">(): (_key: PH, object: any) => propSatisfies_manual_101<V>;
    (key: Property): propSatisfies_manual_110<V>;
};
type propSatisfies_keyof_010<T, K extends keyof T> = {
    <T$1 extends T = T>(_fn: PH, object: T$1): propSatisfies_keyof_011<T$1, K>;
    <T$1 extends T = T>(fn: Predicate<T$1[K]>, object: T): propSatisfies_keyof_111;
    <$SEL extends "11">(): <T$1 extends T = T>(fn: Predicate<T$1[K]>, object: T) => propSatisfies_keyof_111;
    <$SEL extends "1">(): (fn: Predicate<T[K]>) => propSatisfies_keyof_110<T, K>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, object: T$1) => propSatisfies_keyof_011<T$1, K>;
    (fn: Predicate<T[K]>): propSatisfies_keyof_110<T, K>;
};
type propSatisfies_record_010<K extends string> = {
    <T extends Record<K, any>>(_fn: PH, object: T): propSatisfies_record_011<K, T>;
    <T$1 extends Record<K, any>, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K]>, object: T$2): propSatisfies_record_111;
    <$SEL extends "11">(): <T$1 extends Record<K, any>, T$2 extends T$1 = T$1>(fn: Predicate<T$1[K]>, object: T$2) => propSatisfies_record_111;
    <$SEL extends "1">(): <T extends Record<K, any>>(fn: Predicate<T[K]>) => propSatisfies_record_110<K, T>;
    <$SEL extends "01">(): <T extends Record<K, any>>(_fn: PH, object: T) => propSatisfies_record_011<K, T>;
    <T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_110<K, T>;
};
type propSatisfies_manual_010 = {
    (_fn: PH, object: any): propSatisfies_manual_011;
    <V>(fn: Predicate<V>, object: any): propSatisfies_manual_111;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, object: any) => propSatisfies_manual_111;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_manual_110<V>;
    <$SEL extends "01">(): (_fn: PH, object: any) => propSatisfies_manual_011;
    <V>(fn: Predicate<V>): propSatisfies_manual_110<V>;
};
type propSatisfies_keyof_110<T, K extends keyof T> = {
    <T$1 extends T = T>(object: T$1): propSatisfies_keyof_111;
};
type propSatisfies_record_110<K extends string, T extends Record<K, any>> = {
    <T$1 extends T = T>(object: T$1): propSatisfies_record_111;
};
type propSatisfies_manual_110<V> = {
    (object: any): propSatisfies_manual_111;
};
type propSatisfies_keyof_001<T> = {
    <K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_011<T, K>;
    <K$1 extends keyof T, K$2 extends K$1 = K$1>(fn: Predicate<T[K$1]>, key: K$2): propSatisfies_keyof_111;
    <$SEL extends "11">(): <K$1 extends keyof T, K$2 extends K$1 = K$1>(fn: Predicate<T[K$1]>, key: K$2) => propSatisfies_keyof_111;
    <$SEL extends "1">(): <K extends keyof T>(fn: Predicate<T[K]>) => propSatisfies_keyof_101<T, K>;
    <$SEL extends "01">(): <K extends keyof T>(_fn: PH, key: K) => propSatisfies_keyof_011<T, K>;
    <K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_101<T, K>;
};
type propSatisfies_record_001<K extends string, T extends Record<K, any>> = {
    (_fn: PH, key: K): propSatisfies_record_011<K, T>;
    (fn: Predicate<T[K]>, key: K): propSatisfies_record_111;
    <$SEL extends "11">(): (fn: Predicate<T[K]>, key: K) => propSatisfies_record_111;
    <$SEL extends "1">(): (fn: Predicate<T[K]>) => propSatisfies_record_101<K, T>;
    <$SEL extends "01">(): (_fn: PH, key: K) => propSatisfies_record_011<K, T>;
    (fn: Predicate<T[K]>): propSatisfies_record_101<K, T>;
};
type propSatisfies_manual_001 = {
    (_fn: PH, key: Property): propSatisfies_manual_011;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_manual_111;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_manual_111;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_manual_101<V>;
    <$SEL extends "01">(): (_fn: PH, key: Property) => propSatisfies_manual_011;
    <V>(fn: Predicate<V>): propSatisfies_manual_101<V>;
};
type propSatisfies_keyof_101<T, K extends keyof T> = {
    <K$1 extends K = K>(key: K$1): propSatisfies_keyof_111;
};
type propSatisfies_record_101<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_111;
};
type propSatisfies_manual_101<V> = {
    (key: Property): propSatisfies_manual_111;
};
type propSatisfies_keyof_011<T, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_111;
};
type propSatisfies_record_011<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_111;
};
type propSatisfies_manual_011 = {
    <V>(fn: Predicate<V>): propSatisfies_manual_111;
};
type propSatisfies_keyof_111 = boolean;
type propSatisfies_record_111 = boolean;
type propSatisfies_manual_111 = boolean;
export = propSatisfies;
