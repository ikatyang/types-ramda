import { Predicate } from "./$types";
/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
declare const both: both_00;
type both_00 = {
    <T>(fn1: Predicate<T>, fn2: Predicate<T>): both_11<T>;
    <T>(fn1: Predicate<T>): both_10<T>;
};
type both_10<T> = {
    (fn2: Predicate<T>): both_11<T>;
};
type both_01<T> = {
    (fn1: Predicate<T>): both_11<T>;
};
type both_11<T> = Predicate<T>;
export = both;
