import { Path } from "./$types";
/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
declare const pathOr: pathOr_000;
type pathOr_000 = {
    (defaults: any): pathOr_100;
    (defaults: any, path: Path): pathOr_110;
    <$SEL extends "1">(): (defaults: any) => pathOr_100;
    <$SEL extends "11">(): (defaults: any, path: Path) => pathOr_110;
    <$SEL extends "111">(): (defaults: any, path: Path, object: {}) => pathOr_111;
    (defaults: any, path: Path, object: {}): pathOr_111;
};
type pathOr_100 = {
    (path: Path): pathOr_110;
    <$SEL extends "1">(): (path: Path) => pathOr_110;
    <$SEL extends "11">(): (path: Path, object: {}) => pathOr_111;
    (path: Path, object: {}): pathOr_111;
};
type pathOr_010 = {
    (defaults: any): pathOr_110;
    <$SEL extends "1">(): (defaults: any) => pathOr_110;
    <$SEL extends "11">(): (defaults: any, object: {}) => pathOr_111;
    (defaults: any, object: {}): pathOr_111;
};
type pathOr_110 = {
    (object: {}): pathOr_111;
};
type pathOr_001 = {
    (defaults: any): pathOr_101;
    <$SEL extends "1">(): (defaults: any) => pathOr_101;
    <$SEL extends "11">(): (defaults: any, path: Path) => pathOr_111;
    (defaults: any, path: Path): pathOr_111;
};
type pathOr_101 = {
    (path: Path): pathOr_111;
};
type pathOr_011 = {
    (defaults: any): pathOr_111;
};
type pathOr_111 = any;
export = pathOr;
