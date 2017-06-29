import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
declare const union: union_00;
type union_00 = {
    <T>(_a: PH, b: List<T>): union_01<T>;
    <T$1, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>): union_11<T$2>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>) => union_11<T$2>;
    <$SEL extends "1">(): <T>(a: List<T>) => union_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: List<T>) => union_01<T>;
    <T>(a: List<T>): union_10<T>;
};
type union_10<T> = {
    <T$1 extends T = T>(b: List<T$1>): union_11<T$1>;
};
type union_01<T> = {
    (a: List<T>): union_11<T>;
};
type union_11<T> = T[];
export = union;
