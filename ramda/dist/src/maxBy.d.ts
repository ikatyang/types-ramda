import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
declare const maxBy: maxBy_000;
type maxBy_000 = {
    <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Ordered>, _a: PH, b: T$2): maxBy_101<T$2>;
    <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: T$1, b: T$2): maxBy_011<T$2>;
    <T>(_fn: PH, _a: PH, b: T): maxBy_001<T>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Morphism<T$1, Ordered>, a: T$2, b: T$3): maxBy_111<T$3>;
    <T>(_fn: PH, a: T): maxBy_010<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Ordered>, a: T$2): maxBy_110<T$2>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Morphism<T$1, Ordered>, a: T$2, b: T$3) => maxBy_111<T$3>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Ordered>, a: T$2) => maxBy_110<T$2>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Ordered>, _a: PH, b: T$2) => maxBy_101<T$2>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => maxBy_100<T>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: T$1, b: T$2) => maxBy_011<T$2>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => maxBy_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => maxBy_001<T>;
    <T>(fn: Morphism<T, Ordered>): maxBy_100<T>;
};
type maxBy_100<T> = {
    <T$1 extends T = T>(_a: PH, b: T$1): maxBy_101<T$1>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(a: T$1, b: T$2): maxBy_111<T$2>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => maxBy_111<T$2>;
    <$SEL extends "1">(): <T$1 extends T = T>(a: T$1) => maxBy_110<T$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_a: PH, b: T$1) => maxBy_101<T$1>;
    <T$1 extends T = T>(a: T$1): maxBy_110<T$1>;
};
type maxBy_010<T> = {
    <T$1 extends T = T>(_fn: PH, b: T$1): maxBy_011<T$1>;
    <T$1 extends T = T>(fn: Morphism<T$1, Ordered>, b: T): maxBy_111<T$1>;
    <$SEL extends "11">(): <T$1 extends T = T>(fn: Morphism<T$1, Ordered>, b: T) => maxBy_111<T$1>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => maxBy_110<T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, b: T$1) => maxBy_011<T$1>;
    (fn: Morphism<T, Ordered>): maxBy_110<T>;
};
type maxBy_110<T> = {
    <T$1 extends T = T>(b: T$1): maxBy_111<T$1>;
};
type maxBy_001<T> = {
    (_fn: PH, a: T): maxBy_011<T>;
    (fn: Morphism<T, Ordered>, a: T): maxBy_111<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, a: T) => maxBy_111<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => maxBy_101<T>;
    <$SEL extends "01">(): (_fn: PH, a: T) => maxBy_011<T>;
    (fn: Morphism<T, Ordered>): maxBy_101<T>;
};
type maxBy_101<T> = {
    (a: T): maxBy_111<T>;
};
type maxBy_011<T> = {
    (fn: Morphism<T, Ordered>): maxBy_111<T>;
};
type maxBy_111<T> = T;
export = maxBy;
