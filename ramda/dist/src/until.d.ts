import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
declare const until: until_000;
type until_000 = {
    <T$1, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, _fn: PH, initial: T$2): until_101<T$2>;
    <T$1, T$2 extends T$1 = T$1>(_pred: PH, fn: Morphism<T$1, T$1>, initial: T$2): until_011<T$2>;
    <T>(_pred: PH, _fn: PH, initial: T): until_001<T>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: Predicate<T$1>, fn: Morphism<T$2, T$2>, initial: T$3): until_111<T$3>;
    <T>(_pred: PH, fn: Morphism<T, T>): until_010<T>;
    <T$1, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, fn: Morphism<T$2, T$2>): until_110<T$2>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: Predicate<T$1>, fn: Morphism<T$2, T$2>, initial: T$3) => until_111<T$3>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, fn: Morphism<T$2, T$2>) => until_110<T$2>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, _fn: PH, initial: T$2) => until_101<T$2>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => until_100<T>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_pred: PH, fn: Morphism<T$1, T$1>, initial: T$2) => until_011<T$2>;
    <$SEL extends "01">(): <T>(_pred: PH, fn: Morphism<T, T>) => until_010<T>;
    <$SEL extends "001">(): <T>(_pred: PH, _fn: PH, initial: T) => until_001<T>;
    <T>(pred: Predicate<T>): until_100<T>;
};
type until_100<T> = {
    <T$1 extends T = T>(_fn: PH, initial: T$1): until_101<T$1>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(fn: Morphism<T$1, T$1>, initial: T$2): until_111<T$2>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(fn: Morphism<T$1, T$1>, initial: T$2) => until_111<T$2>;
    <$SEL extends "1">(): <T$1 extends T = T>(fn: Morphism<T$1, T$1>) => until_110<T$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, initial: T$1) => until_101<T$1>;
    <T$1 extends T = T>(fn: Morphism<T$1, T$1>): until_110<T$1>;
};
type until_010<T> = {
    <T$1 extends T = T>(_pred: PH, initial: T$1): until_011<T$1>;
    <T$1 extends T = T>(pred: Predicate<T$1>, initial: T): until_111<T$1>;
    <$SEL extends "11">(): <T$1 extends T = T>(pred: Predicate<T$1>, initial: T) => until_111<T$1>;
    <$SEL extends "1">(): (pred: Predicate<T>) => until_110<T>;
    <$SEL extends "01">(): <T$1 extends T = T>(_pred: PH, initial: T$1) => until_011<T$1>;
    (pred: Predicate<T>): until_110<T>;
};
type until_110<T> = {
    <T$1 extends T = T>(initial: T$1): until_111<T$1>;
};
type until_001<T> = {
    (_pred: PH, fn: Morphism<T, T>): until_011<T>;
    (pred: Predicate<T>, fn: Morphism<T, T>): until_111<T>;
    <$SEL extends "11">(): (pred: Predicate<T>, fn: Morphism<T, T>) => until_111<T>;
    <$SEL extends "1">(): (pred: Predicate<T>) => until_101<T>;
    <$SEL extends "01">(): (_pred: PH, fn: Morphism<T, T>) => until_011<T>;
    (pred: Predicate<T>): until_101<T>;
};
type until_101<T> = {
    (fn: Morphism<T, T>): until_111<T>;
};
type until_011<T> = {
    (pred: Predicate<T>): until_111<T>;
};
type until_111<T> = T;
export = until;
