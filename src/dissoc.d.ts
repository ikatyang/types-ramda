import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
    <T>(property: Property, object: T): dissoc_remain_11<T>;
    <T>(property: Property, object: object): dissoc_manual_11<T>;
    <$SEL extends "11", $KIND extends "remain">(): <T>(property: Property, object: T) => dissoc_remain_11<T>;
    <$SEL extends "11", $KIND extends "manual">(): <T>(property: Property, object: object) => dissoc_manual_11<T>;
    <$SEL extends "1">(): (property: Property) => dissoc_10;
    (property: Property): dissoc_10;
};
type dissoc_10 = {
    <T>(object: T): dissoc_remain_11<T>;
    <$SEL extends "1", $KIND extends "remain">(): <T>(object: T) => dissoc_remain_11<T>;
    <$SEL extends "1", $KIND extends "manual">(): <T>(object: object) => dissoc_manual_11<T>;
    <T>(object: object): dissoc_manual_11<T>;
};
type dissoc_remain_01<T> = {
    (property: Property): dissoc_remain_11<T>;
};
type dissoc_manual_01 = {
    <T>(property: Property): dissoc_manual_11<T>;
};
type dissoc_remain_11<T> = T;
type dissoc_manual_11<T> = T;
export = dissoc;
