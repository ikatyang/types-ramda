import { Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
declare const eqBy: eqBy_000;
type eqBy_000 = {
    <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, any>, _a: PH, b: T$2): eqBy_101<T$2>;
    <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: T$1, b: T$2): eqBy_011<T$2>;
    <T>(_fn: PH, _a: PH, b: T): eqBy_001<T>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Morphism<T$1, any>, a: T$2, b: T$3): eqBy_111;
    <T>(_fn: PH, a: T): eqBy_010<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, any>, a: T$2): eqBy_110<T$2>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(fn: Morphism<T$1, any>, a: T$2, b: T$3) => eqBy_111;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, any>, a: T$2) => eqBy_110<T$2>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(fn: Morphism<T$1, any>, _a: PH, b: T$2) => eqBy_101<T$2>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, any>) => eqBy_100<T>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_fn: PH, a: T$1, b: T$2) => eqBy_011<T$2>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => eqBy_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => eqBy_001<T>;
    <T>(fn: Morphism<T, any>): eqBy_100<T>;
};
type eqBy_100<T> = {
    <T$1 extends T = T>(_a: PH, b: T$1): eqBy_101<T$1>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(a: T$1, b: T$2): eqBy_111;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(a: T$1, b: T$2) => eqBy_111;
    <$SEL extends "1">(): <T$1 extends T = T>(a: T$1) => eqBy_110<T$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_a: PH, b: T$1) => eqBy_101<T$1>;
    <T$1 extends T = T>(a: T$1): eqBy_110<T$1>;
};
type eqBy_010<T> = {
    <T$1 extends T = T>(_fn: PH, b: T$1): eqBy_011<T$1>;
    <T$1 extends T = T>(fn: Morphism<T$1, any>, b: T): eqBy_111;
    <$SEL extends "11">(): <T$1 extends T = T>(fn: Morphism<T$1, any>, b: T) => eqBy_111;
    <$SEL extends "1">(): (fn: Morphism<T, any>) => eqBy_110<T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, b: T$1) => eqBy_011<T$1>;
    (fn: Morphism<T, any>): eqBy_110<T>;
};
type eqBy_110<T> = {
    <T$1 extends T = T>(b: T$1): eqBy_111;
};
type eqBy_001<T> = {
    (_fn: PH, a: T): eqBy_011<T>;
    (fn: Morphism<T, any>, a: T): eqBy_111;
    <$SEL extends "11">(): (fn: Morphism<T, any>, a: T) => eqBy_111;
    <$SEL extends "1">(): (fn: Morphism<T, any>) => eqBy_101<T>;
    <$SEL extends "01">(): (_fn: PH, a: T) => eqBy_011<T>;
    (fn: Morphism<T, any>): eqBy_101<T>;
};
type eqBy_101<T> = {
    (a: T): eqBy_111;
};
type eqBy_011<T> = {
    (fn: Morphism<T, any>): eqBy_111;
};
type eqBy_111 = boolean;
export = eqBy;
