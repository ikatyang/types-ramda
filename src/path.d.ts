import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
declare const path: path_00;
type path_00 = {
    (path: Path): path_10;
    (_path: PH, object: any): path_01;
    <R>(path: Path, object: any): path_11<R>;
};
type path_10 = {
    <R>(object: any): path_11<R>;
};
type path_01 = {
    <R>(path: Path): path_11<R>;
};
type path_11<R> = R;
export = path;
