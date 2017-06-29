import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the first argument is greater than the second; `false`
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
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
declare const gt: gt_00;
type gt_00 = {
    <T extends Ordered>(_a: PH, b: T): gt_01<T>;
    <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2): gt_11;
    <$SEL extends "11">(): <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => gt_11;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => gt_10<T>;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => gt_01<T>;
    <T extends Ordered>(a: T): gt_10<T>;
};
type gt_10<T extends Ordered> = {
    <T$1 extends T = T>(b: T$1): gt_11;
};
type gt_01<T extends Ordered> = {
    (a: T): gt_11;
};
type gt_11 = boolean;
export = gt;
