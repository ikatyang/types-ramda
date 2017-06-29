import { Morphism, Predicate } from "./$types";
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
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>, value: T): unless_111<T, U>;
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_110<T, U>;
    <T>(pred: Predicate<T>): unless_100<T>;
};
type unless_100<T> = {
    <U>(whenFalseFn: Morphism<T, U>, value: T): unless_111<T, U>;
    <U>(whenFalseFn: Morphism<T, U>): unless_110<T, U>;
};
type unless_010<T, U> = {
    (pred: Predicate<T>, value: T): unless_111<T, U>;
    (pred: Predicate<T>): unless_110<T, U>;
};
type unless_110<T, U> = {
    (value: T): unless_111<T, U>;
};
type unless_001<T> = {
    <U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_111<T, U>;
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
