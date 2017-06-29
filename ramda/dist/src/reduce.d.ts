import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
declare const reduce: reduce_000;
type reduce_000 = {
    <T$1, U, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T$2>): reduce_101<T$2, U>;
    <T, U>(_fn: PH, initial: U, values: List<T>): reduce_011<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): reduce_001<T>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>): reduce_111<U$2>;
    <U>(_fn: PH, initial: U): reduce_010<U>;
    <T, U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduce_110<T, U$2>;
    <$SEL extends "111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>) => reduce_111<U$2>;
    <$SEL extends "11">(): <T, U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduce_110<T, U$2>;
    <$SEL extends "101">(): <T$1, U, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T$2>) => reduce_101<T$2, U>;
    <$SEL extends "1">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_100<T, U>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, values: List<T>) => reduce_011<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => reduce_010<U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, values: List<T>) => reduce_001<T>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_100<T, U>;
};
type reduce_100<T, U> = {
    <T$1 extends T = T>(_initial: PH, values: List<T$1>): reduce_101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>): reduce_111<U$1>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>) => reduce_111<U$1>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => reduce_110<T, U$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: List<T$1>) => reduce_101<T$1, U>;
    <U$1 extends U = U>(initial: U$1): reduce_110<T, U$1>;
};
type reduce_010<U> = {
    <T>(_fn: PH, values: List<T>): reduce_011<T, U>;
    <T$1, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>): reduce_111<U>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>) => reduce_111<U>;
    <$SEL extends "1">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_110<T, U>;
    <$SEL extends "01">(): <T>(_fn: PH, values: List<T>) => reduce_011<T, U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_110<T, U>;
};
type reduce_110<T, U> = {
    <T$1 extends T = T>(values: List<T$1>): reduce_111<U>;
};
type reduce_001<T> = {
    <U>(_fn: PH, initial: U): reduce_011<T, U>;
    <U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduce_111<U$2>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduce_111<U$2>;
    <$SEL extends "1">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_101<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => reduce_011<T, U>;
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_101<T, U>;
};
type reduce_101<T, U> = {
    <U$1 extends U = U>(initial: U$1): reduce_111<U$1>;
};
type reduce_011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_111<U>;
};
type reduce_111<U> = U;
export = reduce;
