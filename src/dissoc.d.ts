import { Omit } from "./$operation";
import { Property } from "./$types";
/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
declare const dissoc: dissoc_00;
type dissoc_00 = {
    <T, K extends keyof T>(property: K): dissoc_keyof_10<T, K>;
    <K extends string>(property: K): dissoc_record_10<K>;
    (property: Property): dissoc_general_10;
    <T, K extends keyof T>(property: K, object: T): dissoc_keyof_11<T, K>;
    <T extends Record<K, any>, K extends string>(property: K, object: T): dissoc_record_11<T, K>;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(property: K) => dissoc_keyof_10<T, K>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(property: K) => dissoc_record_10<K>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => dissoc_general_10;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K extends keyof T>(property: K, object: T) => dissoc_keyof_11<T, K>;
    <$SEL extends "11", $KIND extends "record">(): <T extends Record<K, any>, K extends string>(property: K, object: T) => dissoc_record_11<T, K>;
    <$SEL extends "11", $KIND extends "general">(): <T>(property: Property, object: T) => dissoc_general_11<T>;
    <T>(property: Property, object: T): dissoc_general_11<T>;
};
type dissoc_01<T> = {
    <K extends keyof T>(property: K): dissoc_keyof_11<T, K>;
    (property: K): dissoc_record_11<T, K>;
    <$SEL extends "1", $KIND extends "keyof">(): <K extends keyof T>(property: K) => dissoc_keyof_11<T, K>;
    <$SEL extends "1", $KIND extends "record">(): (property: K) => dissoc_record_11<T, K>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => dissoc_general_11<T>;
    (property: Property): dissoc_general_11<T>;
};
type dissoc_keyof_10<T, K extends keyof T> = {
    (object: T): dissoc_keyof_11<T, K>;
};
type dissoc_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): dissoc_record_11<T, K>;
};
type dissoc_general_10 = {
    <T>(object: T): dissoc_general_11<T>;
};
type dissoc_keyof_11<T, K extends keyof T> = Omit<T, K>;
type dissoc_record_11<T extends Record<K, any>, K extends string> = Omit<T, K>;
type dissoc_general_11<T> = T;
export = dissoc;
