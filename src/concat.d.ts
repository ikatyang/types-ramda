import { List } from "./$types";
/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
declare const concat: concat_00;
type concat_00 = {
    (a: string, b: string): concat_string_11;
    <T>(a: T[], b: T[]): concat__11<T>;
    (a: string): concat_string_10;
    <$SEL extends "11", $KIND extends "string">(): (a: string, b: string) => concat_string_11;
    <$SEL extends "1", $KIND extends "string">(): (a: string) => concat_string_10;
    <$SEL extends "11", $KIND extends "">(): <T>(a: T[], b: T[]) => concat__11<T>;
    <$SEL extends "1", $KIND extends "">(): <T>(a: T[]) => concat__10<T>;
    <T>(a: T[]): concat__10<T>;
};
type concat_string_10 = {
    (b: string): concat_string_11;
};
type concat__10<T> = {
    (b: T[]): concat__11<T>;
};
type concat_string_01 = {
    (a: string): concat_string_11;
};
type concat__01<T> = {
    (a: T[]): concat__11<T>;
};
type concat_string_11 = string;
type concat__11<T> = T[];
export = concat;
