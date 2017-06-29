import { Ordered } from "./$types";
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
    <T extends Ordered>(a: T, b: T): lt_11;
    <$SEL extends "11">(): <T extends Ordered>(a: T, b: T) => lt_11;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => lt_10<T>;
    <T extends Ordered>(a: T): lt_10<T>;
};
type lt_10<T extends Ordered> = {
    (b: T): lt_11;
};
type lt_01<T extends Ordered> = {
    (a: T): lt_11;
};
type lt_11 = boolean;
export = lt;
