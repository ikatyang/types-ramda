import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
    <T extends List<any>>(_a: PH, b: T): concat_01<T>;
    <T extends List<any>>(a: T, b: T): concat_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(a: T, b: T) => concat_11<T>;
    <$SEL extends "1">(): <T extends List<any>>(a: T) => concat_10<T>;
    <$SEL extends "01">(): <T extends List<any>>(_a: PH, b: T) => concat_01<T>;
    <T extends List<any>>(a: T): concat_10<T>;
};
type concat_10<T extends List<any>> = {
    (b: T): concat_11<T>;
};
type concat_01<T extends List<any>> = {
    (a: T): concat_11<T>;
};
type concat_11<T extends List<any>> = T;
export = concat;
