import { List, Property } from "./$types";
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
    <T, K extends keyof T>(keys: List<K>): pick_keyof_10<T, K>;
    <K extends string>(keys: List<K>): pick_record_10<K>;
    (keys: List<Property>): pick_general_10;
    <T, K extends keyof T>(keys: List<K>, object: T): pick_keyof_11<T, K>;
    <T extends Record<K, any>, K extends string>(keys: List<K>, object: T): pick_record_11<T, K>;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(keys: List<K>) => pick_keyof_10<T, K>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(keys: List<K>) => pick_record_10<K>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => pick_general_10;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K extends keyof T>(keys: List<K>, object: T) => pick_keyof_11<T, K>;
    <$SEL extends "11", $KIND extends "record">(): <T extends Record<K, any>, K extends string>(keys: List<K>, object: T) => pick_record_11<T, K>;
    <$SEL extends "11", $KIND extends "general">(): <T>(keys: List<Property>, object: T) => pick_general_11<T>;
    <T>(keys: List<Property>, object: T): pick_general_11<T>;
};
type pick_01<T> = {
    <K extends keyof T>(keys: List<K>): pick_keyof_11<T, K>;
    (keys: List<K>): pick_record_11<T, K>;
    <$SEL extends "1", $KIND extends "keyof">(): <K extends keyof T>(keys: List<K>) => pick_keyof_11<T, K>;
    <$SEL extends "1", $KIND extends "record">(): (keys: List<K>) => pick_record_11<T, K>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => pick_general_11<T>;
    (keys: List<Property>): pick_general_11<T>;
};
type pick_keyof_10<T, K extends keyof T> = {
    (object: T): pick_keyof_11<T, K>;
};
type pick_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): pick_record_11<T, K>;
};
type pick_general_10 = {
    <T>(object: T): pick_general_11<T>;
};
type pick_keyof_11<T, K extends keyof T> = Pick<T, K>;
type pick_record_11<T extends Record<K, any>, K extends string> = Pick<T, K>;
type pick_general_11<T> = Partial<T>;
export = pick;
