import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
declare const gte: gte_00;
type gte_00 = {
    <T extends Ordered>(_a: PH, b: T): gte_01<T>;
    <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2): gte_11;
    <$SEL extends "11">(): <T$1 extends Ordered, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => gte_11;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => gte_10<T>;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => gte_01<T>;
    <T extends Ordered>(a: T): gte_10<T>;
};
type gte_10<T extends Ordered> = {
    <T$1 extends T = T>(b: T$1): gte_11;
};
type gte_01<T extends Ordered> = {
    (a: T): gte_11;
};
type gte_11 = boolean;
export = gte;
