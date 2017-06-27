import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
declare const splitEvery: splitEvery_00;
type splitEvery_00 = {
    (_n: PH, str: string): splitEvery_string_01;
    <T>(_n: PH, list: List<T>): splitEvery_list_01<T>;
    (n: number, str: string): splitEvery_string_11;
    <T>(n: number, list: List<T>): splitEvery_list_11<T>;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => splitEvery_string_11;
    <$SEL extends "01", $KIND extends "string">(): (_n: PH, str: string) => splitEvery_string_01;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => splitEvery_list_11<T>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_n: PH, list: List<T>) => splitEvery_list_01<T>;
    <$SEL extends "1">(): (n: number) => splitEvery_10;
    (n: number): splitEvery_10;
};
type splitEvery_10 = {
    (str: string): splitEvery_string_11;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => splitEvery_string_11;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => splitEvery_list_11<T>;
    <T>(list: List<T>): splitEvery_list_11<T>;
};
type splitEvery_string_01 = {
    (n: number): splitEvery_string_11;
};
type splitEvery_list_01<T> = {
    (n: number): splitEvery_list_11<T>;
};
type splitEvery_string_11 = string[];
type splitEvery_list_11<T> = T[][];
export = splitEvery;
