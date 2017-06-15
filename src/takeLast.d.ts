import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
declare const takeLast: takeLast_00;
type takeLast_00 = {
    <T extends List<any>>(_n: PH, list: T): takeLast_01<T>;
    <T extends List<any>>(n: number, list: T): takeLast_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, list: T) => takeLast_11<T>;
    <$SEL extends "1">(): (n: number) => takeLast_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, list: T) => takeLast_01<T>;
    (n: number): takeLast_10;
};
type takeLast_10 = {
    <T extends List<any>>(list: T): takeLast_11<T>;
};
type takeLast_01<T extends List<any>> = {
    (n: number): takeLast_11<T>;
};
type takeLast_11<T extends List<any>> = T;
export = takeLast;
