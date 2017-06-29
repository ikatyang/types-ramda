import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
declare const lt: lt_00;
type lt_00 = {
    <T extends Ordered>(_a: PH, b: T): lt_01<T>;
    <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2): lt_11;
    <$SEL extends "11">(): <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => lt_11;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => lt_10<T>;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => lt_01<T>;
    <T extends Ordered>(a: T): lt_10<T>;
};
type lt_10<T extends Ordered> = {
    <T$1 extends T = T>(b: T$1): lt_11;
};
type lt_01<T extends Ordered> = {
    (a: T): lt_11;
};
type lt_11 = boolean;
export = lt;
