import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
declare const reduceRight: reduceRight_000;
type reduceRight_000 = {
    <T$1, U, T$2 extends T$1 = T$1>(fn: (value: T$1, accumulator: U) => Reduced<U> | U, _initial: PH, values: List<T$2>): reduceRight_101<T$2, U>;
    <T, U>(_fn: PH, initial: U, values: List<T>): reduceRight_011<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): reduceRight_001<T>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(fn: (value: T$1, accumulator: U$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>): reduceRight_111<U$2>;
    <U>(_fn: PH, initial: U): reduceRight_010<U>;
    <T, U$1, U$2 extends U$1 = U$1>(fn: (value: T, accumulator: U$1) => Reduced<U$1> | U$1, initial: U$2): reduceRight_110<T, U$2>;
    <$SEL extends "111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(fn: (value: T$1, accumulator: U$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>) => reduceRight_111<U$2>;
    <$SEL extends "11">(): <T, U$1, U$2 extends U$1 = U$1>(fn: (value: T, accumulator: U$1) => Reduced<U$1> | U$1, initial: U$2) => reduceRight_110<T, U$2>;
    <$SEL extends "101">(): <T$1, U, T$2 extends T$1 = T$1>(fn: (value: T$1, accumulator: U) => Reduced<U> | U, _initial: PH, values: List<T$2>) => reduceRight_101<T$2, U>;
    <$SEL extends "1">(): <T, U>(fn: (value: T, accumulator: U) => Reduced<U> | U) => reduceRight_100<T, U>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, values: List<T>) => reduceRight_011<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => reduceRight_010<U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, values: List<T>) => reduceRight_001<T>;
    <T, U>(fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_100<T, U>;
};
type reduceRight_100<T, U> = {
    <T$1 extends T = T>(_initial: PH, values: List<T$1>): reduceRight_101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>): reduceRight_111<U$1>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>) => reduceRight_111<U$1>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => reduceRight_110<T, U$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: List<T$1>) => reduceRight_101<T$1, U>;
    <U$1 extends U = U>(initial: U$1): reduceRight_110<T, U$1>;
};
type reduceRight_010<U> = {
    <T>(_fn: PH, values: List<T>): reduceRight_011<T, U>;
    <T$1, T$2 extends T$1 = T$1>(fn: (value: T$1, accumulator: U) => Reduced<U> | U, values: List<T$2>): reduceRight_111<U>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: (value: T$1, accumulator: U) => Reduced<U> | U, values: List<T$2>) => reduceRight_111<U>;
    <$SEL extends "1">(): <T>(fn: (value: T, accumulator: U) => Reduced<U> | U) => reduceRight_110<T, U>;
    <$SEL extends "01">(): <T>(_fn: PH, values: List<T>) => reduceRight_011<T, U>;
    <T>(fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_110<T, U>;
};
type reduceRight_110<T, U> = {
    <T$1 extends T = T>(values: List<T$1>): reduceRight_111<U>;
};
type reduceRight_001<T> = {
    <U>(_fn: PH, initial: U): reduceRight_011<T, U>;
    <U$1, U$2 extends U$1 = U$1>(fn: (value: T, accumulator: U$1) => Reduced<U$1> | U$1, initial: U$2): reduceRight_111<U$2>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(fn: (value: T, accumulator: U$1) => Reduced<U$1> | U$1, initial: U$2) => reduceRight_111<U$2>;
    <$SEL extends "1">(): <U>(fn: (value: T, accumulator: U) => Reduced<U> | U) => reduceRight_101<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => reduceRight_011<T, U>;
    <U>(fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_101<T, U>;
};
type reduceRight_101<T, U> = {
    <U$1 extends U = U>(initial: U$1): reduceRight_111<U$1>;
};
type reduceRight_011<T, U> = {
    (fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_111<U>;
};
type reduceRight_111<U> = U;
export = reduceRight;
