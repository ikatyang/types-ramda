import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
declare const unless: unless_000;
type unless_000 = {
    <T$1, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, _whenFalseFn: PH, value: T$2): unless_101<T$2>;
    <T$1, U, T$2 extends T$1 = T$1>(_pred: PH, whenFalseFn: Morphism<T$1, U>, value: T$2): unless_011<T$2, U>;
    <T>(_pred: PH, _whenFalseFn: PH, value: T): unless_001<T>;
    <T$1, U, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: Predicate<T$1>, whenFalseFn: Morphism<T$2, U>, value: T$3): unless_111<T$3, U>;
    <T, U>(_pred: PH, whenFalseFn: Morphism<T, U>): unless_010<T, U>;
    <T$1, U, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, whenFalseFn: Morphism<T$2, U>): unless_110<T$2, U>;
    <$SEL extends "111">(): <T$1, U, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: Predicate<T$1>, whenFalseFn: Morphism<T$2, U>, value: T$3) => unless_111<T$3, U>;
    <$SEL extends "11">(): <T$1, U, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, whenFalseFn: Morphism<T$2, U>) => unless_110<T$2, U>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, _whenFalseFn: PH, value: T$2) => unless_101<T$2>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => unless_100<T>;
    <$SEL extends "011">(): <T$1, U, T$2 extends T$1 = T$1>(_pred: PH, whenFalseFn: Morphism<T$1, U>, value: T$2) => unless_011<T$2, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, whenFalseFn: Morphism<T, U>) => unless_010<T, U>;
    <$SEL extends "001">(): <T>(_pred: PH, _whenFalseFn: PH, value: T) => unless_001<T>;
    <T>(pred: Predicate<T>): unless_100<T>;
};
type unless_100<T> = {
    <T$1 extends T = T>(_whenFalseFn: PH, value: T$1): unless_101<T$1>;
    <U, T$1 extends T = T, T$2 extends T$1 = T$1>(whenFalseFn: Morphism<T$1, U>, value: T$2): unless_111<T$2, U>;
    <$SEL extends "11">(): <U, T$1 extends T = T, T$2 extends T$1 = T$1>(whenFalseFn: Morphism<T$1, U>, value: T$2) => unless_111<T$2, U>;
    <$SEL extends "1">(): <U, T$1 extends T = T>(whenFalseFn: Morphism<T$1, U>) => unless_110<T$1, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_whenFalseFn: PH, value: T$1) => unless_101<T$1>;
    <U, T$1 extends T = T>(whenFalseFn: Morphism<T$1, U>): unless_110<T$1, U>;
};
type unless_010<T, U> = {
    <T$1 extends T = T>(_pred: PH, value: T$1): unless_011<T$1, U>;
    <T$1 extends T = T>(pred: Predicate<T$1>, value: T): unless_111<T$1, U>;
    <$SEL extends "11">(): <T$1 extends T = T>(pred: Predicate<T$1>, value: T) => unless_111<T$1, U>;
    <$SEL extends "1">(): (pred: Predicate<T>) => unless_110<T, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_pred: PH, value: T$1) => unless_011<T$1, U>;
    (pred: Predicate<T>): unless_110<T, U>;
};
type unless_110<T, U> = {
    <T$1 extends T = T>(value: T$1): unless_111<T$1, U>;
};
type unless_001<T> = {
    <U>(_pred: PH, whenFalseFn: Morphism<T, U>): unless_011<T, U>;
    <U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_111<T, U>;
    <$SEL extends "11">(): <U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>) => unless_111<T, U>;
    <$SEL extends "1">(): (pred: Predicate<T>) => unless_101<T>;
    <$SEL extends "01">(): <U>(_pred: PH, whenFalseFn: Morphism<T, U>) => unless_011<T, U>;
    (pred: Predicate<T>): unless_101<T>;
};
type unless_101<T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_111<T, U>;
};
type unless_011<T, U> = {
    (pred: Predicate<T>): unless_111<T, U>;
};
type unless_111<T, U> = T | U;
export = unless;
