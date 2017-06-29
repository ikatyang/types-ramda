import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
declare const scan: scan_000;
type scan_000 = {
    <T$1, U, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T$2>): scan_101<T$2, U>;
    <T, U>(_fn: PH, initial: U, values: List<T>): scan_011<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): scan_001<T>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>): scan_111<U$2>;
    <U>(_fn: PH, initial: U): scan_010<U>;
    <T, U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): scan_110<T, U$2>;
    <$SEL extends "111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>) => scan_111<U$2>;
    <$SEL extends "11">(): <T, U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => scan_110<T, U$2>;
    <$SEL extends "101">(): <T$1, U, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T$2>) => scan_101<T$2, U>;
    <$SEL extends "1">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_100<T, U>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, values: List<T>) => scan_011<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => scan_010<U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, values: List<T>) => scan_001<T>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_100<T, U>;
};
type scan_100<T, U> = {
    <T$1 extends T = T>(_initial: PH, values: List<T$1>): scan_101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>): scan_111<U$1>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>) => scan_111<U$1>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => scan_110<T, U$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: List<T$1>) => scan_101<T$1, U>;
    <U$1 extends U = U>(initial: U$1): scan_110<T, U$1>;
};
type scan_010<U> = {
    <T>(_fn: PH, values: List<T>): scan_011<T, U>;
    <T$1, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>): scan_111<U>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>) => scan_111<U>;
    <$SEL extends "1">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_110<T, U>;
    <$SEL extends "01">(): <T>(_fn: PH, values: List<T>) => scan_011<T, U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_110<T, U>;
};
type scan_110<T, U> = {
    <T$1 extends T = T>(values: List<T$1>): scan_111<U>;
};
type scan_001<T> = {
    <U>(_fn: PH, initial: U): scan_011<T, U>;
    <U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): scan_111<U$2>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => scan_111<U$2>;
    <$SEL extends "1">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_101<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => scan_011<T, U>;
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_101<T, U>;
};
type scan_101<T, U> = {
    <U$1 extends U = U>(initial: U$1): scan_111<U$1>;
};
type scan_011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): scan_111<U>;
};
type scan_111<U> = U[];
export = scan;
