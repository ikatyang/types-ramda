import { Path } from "./$types";
/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
declare const dissocPath: dissocPath_00;
type dissocPath_00 = {
    (path: Path): dissocPath_10;
    <T>(path: Path, object: T): dissocPath_remain_11<T>;
    <$SEL extends "1">(): (path: Path) => dissocPath_10;
    <$SEL extends "11", $KIND extends "remain">(): <T>(path: Path, object: T) => dissocPath_remain_11<T>;
    <$SEL extends "11", $KIND extends "manual">(): <T>(path: Path, object: object) => dissocPath_manual_11<T>;
    <T>(path: Path, object: object): dissocPath_manual_11<T>;
};
type dissocPath_10 = {
    <T>(object: T): dissocPath_remain_11<T>;
    <$SEL extends "1", $KIND extends "remain">(): <T>(object: T) => dissocPath_remain_11<T>;
    <$SEL extends "1", $KIND extends "manual">(): <T>(object: object) => dissocPath_manual_11<T>;
    <T>(object: object): dissocPath_manual_11<T>;
};
type dissocPath_remain_01<T> = {
    (path: Path): dissocPath_remain_11<T>;
};
type dissocPath_manual_01 = {
    <T>(path: Path): dissocPath_manual_11<T>;
};
type dissocPath_remain_11<T> = T;
type dissocPath_manual_11<T> = T;
export = dissocPath;
