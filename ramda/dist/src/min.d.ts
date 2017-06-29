import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
declare const min: min_00;
type min_00 = {
    <T extends Ordered>(_a: PH, b: T): min_01<T>;
    <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2): min_11<T$2>;
    <$SEL extends "11">(): <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => min_11<T$2>;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => min_10<T>;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => min_01<T>;
    <T extends Ordered>(a: T): min_10<T>;
};
type min_10<T extends Ordered> = {
    <T$1 extends T = T>(b: T$1): min_11<T$1>;
};
type min_01<T extends Ordered> = {
    (a: T): min_11<T>;
};
type min_11<T extends Ordered> = T;
export = min;
