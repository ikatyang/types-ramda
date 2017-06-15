import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
declare const dropLast: dropLast_00;
type dropLast_00 = {
    <T extends List<any>>(_n: PH, list: T): dropLast_01<T>;
    <T extends List<any>>(n: number, list: T): dropLast_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, list: T) => dropLast_11<T>;
    <$SEL extends "1">(): (n: number) => dropLast_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, list: T) => dropLast_01<T>;
    (n: number): dropLast_10;
};
type dropLast_10 = {
    <T extends List<any>>(list: T): dropLast_11<T>;
};
type dropLast_01<T extends List<any>> = {
    (n: number): dropLast_11<T>;
};
type dropLast_11<T extends List<any>> = T;
export = dropLast;
