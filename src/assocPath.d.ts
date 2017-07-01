import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
declare const assocPath: assocPath_000;
type assocPath_000 = {
    <T>(_path: PH, _value: PH, object: T): assocPath_001<T>;
    <T>(_path: PH, value: any, object: T): assocPath_011<T>;
    <T>(path: Path, _value: PH, object: T): assocPath_101<T>;
    <T>(path: Path, value: any, object: T): assocPath_111<T>;
    (_path: PH, value: any): assocPath_010;
    (path: Path, value: any): assocPath_110;
    <$SEL extends "111">(): <T>(path: Path, value: any, object: T) => assocPath_111<T>;
    <$SEL extends "11">(): (path: Path, value: any) => assocPath_110;
    <$SEL extends "101">(): <T>(path: Path, _value: PH, object: T) => assocPath_101<T>;
    <$SEL extends "1">(): (path: Path) => assocPath_100;
    <$SEL extends "011">(): <T>(_path: PH, value: any, object: T) => assocPath_011<T>;
    <$SEL extends "01">(): (_path: PH, value: any) => assocPath_010;
    <$SEL extends "001">(): <T>(_path: PH, _value: PH, object: T) => assocPath_001<T>;
    (path: Path): assocPath_100;
};
type assocPath_100 = {
    <T>(_value: PH, object: T): assocPath_101<T>;
    <T>(value: any, object: T): assocPath_111<T>;
    <$SEL extends "11">(): <T>(value: any, object: T) => assocPath_111<T>;
    <$SEL extends "1">(): (value: any) => assocPath_110;
    <$SEL extends "01">(): <T>(_value: PH, object: T) => assocPath_101<T>;
    (value: any): assocPath_110;
};
type assocPath_010 = {
    <T>(_path: PH, object: T): assocPath_011<T>;
    <T>(path: Path, object: T): assocPath_111<T>;
    <$SEL extends "11">(): <T>(path: Path, object: T) => assocPath_111<T>;
    <$SEL extends "1">(): (path: Path) => assocPath_110;
    <$SEL extends "01">(): <T>(_path: PH, object: T) => assocPath_011<T>;
    (path: Path): assocPath_110;
};
type assocPath_110 = {
    <T>(object: T): assocPath_111<T>;
};
type assocPath_001<T> = {
    (_path: PH, value: any): assocPath_011<T>;
    (path: Path, value: any): assocPath_111<T>;
    <$SEL extends "11">(): (path: Path, value: any) => assocPath_111<T>;
    <$SEL extends "1">(): (path: Path) => assocPath_101<T>;
    <$SEL extends "01">(): (_path: PH, value: any) => assocPath_011<T>;
    (path: Path): assocPath_101<T>;
};
type assocPath_101<T> = {
    (value: any): assocPath_111<T>;
};
type assocPath_011<T> = {
    (path: Path): assocPath_111<T>;
};
type assocPath_111<T> = T;
export = assocPath;
