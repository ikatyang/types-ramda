import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
declare const drop: drop_00;
type drop_00 = {
    <T extends List<any>>(_n: PH, list: T): drop_01<T>;
    <T extends List<any>>(n: number, list: T): drop_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, list: T) => drop_11<T>;
    <$SEL extends "1">(): (n: number) => drop_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, list: T) => drop_01<T>;
    (n: number): drop_10;
};
type drop_10 = {
    <T extends List<any>>(list: T): drop_11<T>;
};
type drop_01<T extends List<any>> = {
    (n: number): drop_11<T>;
};
type drop_11<T extends List<any>> = T;
export = drop;
