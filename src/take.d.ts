import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
declare const take: take_00;
type take_00 = {
    <T extends List<any>>(_n: PH, list: T): take_01<T>;
    <T extends List<any>>(n: number, list: T): take_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, list: T) => take_11<T>;
    <$SEL extends "1">(): (n: number) => take_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, list: T) => take_01<T>;
    (n: number): take_10;
};
type take_10 = {
    <T extends List<any>>(list: T): take_11<T>;
};
type take_01<T extends List<any>> = {
    (n: number): take_11<T>;
};
type take_11<T extends List<any>> = T;
export = take;
