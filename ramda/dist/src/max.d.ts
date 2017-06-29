import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
declare const max: max_00;
type max_00 = {
    <T extends Ordered>(_a: PH, b: T): max_01<T>;
    <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2): max_11<T$2>;
    <$SEL extends "11">(): <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => max_11<T$2>;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => max_10<T>;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => max_01<T>;
    <T extends Ordered>(a: T): max_10<T>;
};
type max_10<T extends Ordered> = {
    <T$1 extends T = T>(b: T$1): max_11<T$1>;
};
type max_01<T extends Ordered> = {
    (a: T): max_11<T>;
};
type max_11<T extends Ordered> = T;
export = max;
