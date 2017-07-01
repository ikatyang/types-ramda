import { Path, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
declare const pathSatisfies: pathSatisfies_000;
type pathSatisfies_000 = {
    (_fn: PH, _path: PH, object: any): pathSatisfies_001;
    (_fn: PH, path: Path, object: any): pathSatisfies_011;
    <T>(fn: Predicate<T>, _path: PH, object: any): pathSatisfies_101<T>;
    <T>(fn: Predicate<T>, path: Path, object: any): pathSatisfies_111;
    (_fn: PH, path: Path): pathSatisfies_010;
    <T>(fn: Predicate<T>, path: Path): pathSatisfies_110<T>;
    <T>(fn: Predicate<T>): pathSatisfies_100<T>;
};
type pathSatisfies_100<T> = {
    (_path: PH, object: any): pathSatisfies_101<T>;
    (path: Path, object: any): pathSatisfies_111;
    (path: Path): pathSatisfies_110<T>;
};
type pathSatisfies_010 = {
    (_fn: PH, object: any): pathSatisfies_011;
    <T>(fn: Predicate<T>, object: any): pathSatisfies_111;
    <T>(fn: Predicate<T>): pathSatisfies_110<T>;
};
type pathSatisfies_110<T> = {
    (object: any): pathSatisfies_111;
};
type pathSatisfies_001 = {
    (_fn: PH, path: Path): pathSatisfies_011;
    <T>(fn: Predicate<T>, path: Path): pathSatisfies_111;
    <T>(fn: Predicate<T>): pathSatisfies_101<T>;
};
type pathSatisfies_101<T> = {
    (path: Path): pathSatisfies_111;
};
type pathSatisfies_011 = {
    <T>(fn: Predicate<T>): pathSatisfies_111;
};
type pathSatisfies_111 = boolean;
export = pathSatisfies;
