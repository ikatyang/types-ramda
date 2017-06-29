import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
declare const reduceWhile: reduceWhile_0000;
type reduceWhile_0000 = {
    <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2, _initial: PH, values: List<T$3>): reduceWhile_1101<T$3, U$2>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T$1) => boolean, _fn: PH, initial: U$2, values: List<T$2>): reduceWhile_1011<T$2, U$2>;
    <T$1, U, T$2 extends T$1 = T$1>(pred: (accumulator: U, value: T$1) => boolean, _fn: PH, _initial: PH, values: List<T$2>): reduceWhile_1001<T$2, U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(_pred: PH, fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>): reduceWhile_0111<T$2, U$2>;
    <T$1, U, T$2 extends T$1 = T$1>(_pred: PH, fn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T$2>): reduceWhile_0101<T$2, U>;
    <T, U>(_pred: PH, _fn: PH, initial: U, values: List<T>): reduceWhile_0011<T, U>;
    <T>(_pred: PH, _fn: PH, _initial: PH, values: List<T>): reduceWhile_0001<T>;
    <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2, initial: U$3, values: List<T$3>): reduceWhile_1111<U$3>;
    <T, U$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T) => boolean, _fn: PH, initial: U$2): reduceWhile_1010<T, U$2>;
    <T, U$1, U$2 extends U$1 = U$1>(_pred: PH, fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduceWhile_0110<T, U$2>;
    <U>(_pred: PH, _fn: PH, initial: U): reduceWhile_0010<U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2, initial: U$3): reduceWhile_1110<T$2, U$3>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0100<T, U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2): reduceWhile_1100<T$2, U$2>;
    <$SEL extends "1111">(): <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2, initial: U$3, values: List<T$3>) => reduceWhile_1111<U$3>;
    <$SEL extends "111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2, initial: U$3) => reduceWhile_1110<T$2, U$3>;
    <$SEL extends "1101">(): <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2, _initial: PH, values: List<T$3>) => reduceWhile_1101<T$3, U$2>;
    <$SEL extends "11">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T$1) => boolean, fn: (accumulator: U$2, value: T$2) => Reduced<U$2> | U$2) => reduceWhile_1100<T$2, U$2>;
    <$SEL extends "1011">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T$1) => boolean, _fn: PH, initial: U$2, values: List<T$2>) => reduceWhile_1011<T$2, U$2>;
    <$SEL extends "101">(): <T, U$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T) => boolean, _fn: PH, initial: U$2) => reduceWhile_1010<T, U$2>;
    <$SEL extends "1001">(): <T$1, U, T$2 extends T$1 = T$1>(pred: (accumulator: U, value: T$1) => boolean, _fn: PH, _initial: PH, values: List<T$2>) => reduceWhile_1001<T$2, U>;
    <$SEL extends "1">(): <T, U>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1000<T, U>;
    <$SEL extends "0111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(_pred: PH, fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>) => reduceWhile_0111<T$2, U$2>;
    <$SEL extends "011">(): <T, U$1, U$2 extends U$1 = U$1>(_pred: PH, fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduceWhile_0110<T, U$2>;
    <$SEL extends "0101">(): <T$1, U, T$2 extends T$1 = T$1>(_pred: PH, fn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T$2>) => reduceWhile_0101<T$2, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0100<T, U>;
    <$SEL extends "0011">(): <T, U>(_pred: PH, _fn: PH, initial: U, values: List<T>) => reduceWhile_0011<T, U>;
    <$SEL extends "001">(): <U>(_pred: PH, _fn: PH, initial: U) => reduceWhile_0010<U>;
    <$SEL extends "0001">(): <T>(_pred: PH, _fn: PH, _initial: PH, values: List<T>) => reduceWhile_0001<T>;
    <T, U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1000<T, U>;
};
type reduceWhile_1000<T, U> = {
    <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, _initial: PH, values: List<T$2>): reduceWhile_1101<T$2, U$1>;
    <T$1 extends T = T, U$1 extends U = U>(_fn: PH, initial: U$1, values: List<T$1>): reduceWhile_1011<T$1, U$1>;
    <T$1 extends T = T>(_fn: PH, _initial: PH, values: List<T$1>): reduceWhile_1001<T$1, U>;
    <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>): reduceWhile_1111<U$2>;
    <U$1 extends U = U>(_fn: PH, initial: U$1): reduceWhile_1010<T, U$1>;
    <T$1 extends T = T, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2): reduceWhile_1110<T$1, U$2>;
    <$SEL extends "111">(): <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T$2>) => reduceWhile_1111<U$2>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2) => reduceWhile_1110<T$1, U$2>;
    <$SEL extends "101">(): <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, _initial: PH, values: List<T$2>) => reduceWhile_1101<T$2, U$1>;
    <$SEL extends "1">(): <T$1 extends T = T, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1) => reduceWhile_1100<T$1, U$1>;
    <$SEL extends "011">(): <T$1 extends T = T, U$1 extends U = U>(_fn: PH, initial: U$1, values: List<T$1>) => reduceWhile_1011<T$1, U$1>;
    <$SEL extends "01">(): <U$1 extends U = U>(_fn: PH, initial: U$1) => reduceWhile_1010<T, U$1>;
    <$SEL extends "001">(): <T$1 extends T = T>(_fn: PH, _initial: PH, values: List<T$1>) => reduceWhile_1001<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1): reduceWhile_1100<T$1, U$1>;
};
type reduceWhile_0100<T, U> = {
    <T$1 extends T = T>(pred: (accumulator: U, value: T$1) => boolean, _initial: PH, values: List<T>): reduceWhile_1101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(_pred: PH, initial: U$1, values: List<T$1>): reduceWhile_0111<T$1, U$1>;
    <T$1 extends T = T>(_pred: PH, _initial: PH, values: List<T$1>): reduceWhile_0101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(pred: (accumulator: U$1, value: T$1) => boolean, initial: U, values: List<T>): reduceWhile_1111<U$1>;
    <U$1 extends U = U>(_pred: PH, initial: U$1): reduceWhile_0110<T, U$1>;
    <U$1 extends U = U>(pred: (accumulator: U$1, value: T) => boolean, initial: U): reduceWhile_1110<T, U$1>;
    <$SEL extends "111">(): <T$1 extends T = T, U$1 extends U = U>(pred: (accumulator: U$1, value: T$1) => boolean, initial: U, values: List<T>) => reduceWhile_1111<U$1>;
    <$SEL extends "11">(): <U$1 extends U = U>(pred: (accumulator: U$1, value: T) => boolean, initial: U) => reduceWhile_1110<T, U$1>;
    <$SEL extends "101">(): <T$1 extends T = T>(pred: (accumulator: U, value: T$1) => boolean, _initial: PH, values: List<T>) => reduceWhile_1101<T$1, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1100<T, U>;
    <$SEL extends "011">(): <T$1 extends T = T, U$1 extends U = U>(_pred: PH, initial: U$1, values: List<T$1>) => reduceWhile_0111<T$1, U$1>;
    <$SEL extends "01">(): <U$1 extends U = U>(_pred: PH, initial: U$1) => reduceWhile_0110<T, U$1>;
    <$SEL extends "001">(): <T$1 extends T = T>(_pred: PH, _initial: PH, values: List<T$1>) => reduceWhile_0101<T$1, U>;
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1100<T, U>;
};
type reduceWhile_1100<T, U> = {
    <T$1 extends T = T>(_initial: PH, values: List<T$1>): reduceWhile_1101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>): reduceWhile_1111<U$1>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>) => reduceWhile_1111<U$1>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => reduceWhile_1110<T, U$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: List<T$1>) => reduceWhile_1101<T$1, U>;
    <U$1 extends U = U>(initial: U$1): reduceWhile_1110<T, U$1>;
};
type reduceWhile_0010<U> = {
    <T$1, T$2 extends T$1 = T$1>(pred: (accumulator: U, value: T$1) => boolean, _fn: PH, values: List<T$2>): reduceWhile_1011<T$2, U>;
    <T$1, T$2 extends T$1 = T$1>(_pred: PH, fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>): reduceWhile_0111<T$2, U>;
    <T>(_pred: PH, _fn: PH, values: List<T>): reduceWhile_0011<T, U>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: (accumulator: U, value: T$1) => boolean, fn: (accumulator: U, value: T$2) => Reduced<U> | U, values: List<T$3>): reduceWhile_1111<U>;
    <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0110<T, U>;
    <T$1, T$2 extends T$1 = T$1>(pred: (accumulator: U, value: T$1) => boolean, fn: (accumulator: U, value: T$2) => Reduced<U> | U): reduceWhile_1110<T$2, U>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: (accumulator: U, value: T$1) => boolean, fn: (accumulator: U, value: T$2) => Reduced<U> | U, values: List<T$3>) => reduceWhile_1111<U>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(pred: (accumulator: U, value: T$1) => boolean, fn: (accumulator: U, value: T$2) => Reduced<U> | U) => reduceWhile_1110<T$2, U>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(pred: (accumulator: U, value: T$1) => boolean, _fn: PH, values: List<T$2>) => reduceWhile_1011<T$2, U>;
    <$SEL extends "1">(): <T>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1010<T, U>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_pred: PH, fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>) => reduceWhile_0111<T$2, U>;
    <$SEL extends "01">(): <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0110<T, U>;
    <$SEL extends "001">(): <T>(_pred: PH, _fn: PH, values: List<T>) => reduceWhile_0011<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1010<T, U>;
};
type reduceWhile_1010<T, U> = {
    <T$1 extends T = T>(_fn: PH, values: List<T$1>): reduceWhile_1011<T$1, U>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>): reduceWhile_1111<U>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T$2>) => reduceWhile_1111<U>;
    <$SEL extends "1">(): <T$1 extends T = T>(fn: (accumulator: U, value: T$1) => Reduced<U> | U) => reduceWhile_1110<T$1, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, values: List<T$1>) => reduceWhile_1011<T$1, U>;
    <T$1 extends T = T>(fn: (accumulator: U, value: T$1) => Reduced<U> | U): reduceWhile_1110<T$1, U>;
};
type reduceWhile_0110<T, U> = {
    <T$1 extends T = T>(_pred: PH, values: List<T$1>): reduceWhile_0111<T$1, U>;
    <T$1 extends T = T>(pred: (accumulator: U, value: T$1) => boolean, values: List<T>): reduceWhile_1111<U>;
    <$SEL extends "11">(): <T$1 extends T = T>(pred: (accumulator: U, value: T$1) => boolean, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1110<T, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_pred: PH, values: List<T$1>) => reduceWhile_0111<T$1, U>;
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1110<T, U>;
};
type reduceWhile_1110<T, U> = {
    <T$1 extends T = T>(values: List<T$1>): reduceWhile_1111<U>;
};
type reduceWhile_0001<T> = {
    <U$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T) => boolean, _fn: PH, initial: U$2): reduceWhile_1011<T, U$2>;
    <U$1, U$2 extends U$1 = U$1>(_pred: PH, fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduceWhile_0111<T, U$2>;
    <U>(_pred: PH, _fn: PH, initial: U): reduceWhile_0011<T, U>;
    <U$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(pred: (accumulator: U$1, value: T) => boolean, fn: (accumulator: U$2, value: T) => Reduced<U$2> | U$2, initial: U$3): reduceWhile_1111<U$3>;
    <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0101<T, U>;
    <U$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T) => boolean, fn: (accumulator: U$2, value: T) => Reduced<U$2> | U$2): reduceWhile_1101<T, U$2>;
    <$SEL extends "111">(): <U$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(pred: (accumulator: U$1, value: T) => boolean, fn: (accumulator: U$2, value: T) => Reduced<U$2> | U$2, initial: U$3) => reduceWhile_1111<U$3>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T) => boolean, fn: (accumulator: U$2, value: T) => Reduced<U$2> | U$2) => reduceWhile_1101<T, U$2>;
    <$SEL extends "101">(): <U$1, U$2 extends U$1 = U$1>(pred: (accumulator: U$1, value: T) => boolean, _fn: PH, initial: U$2) => reduceWhile_1011<T, U$2>;
    <$SEL extends "1">(): <U>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1001<T, U>;
    <$SEL extends "011">(): <U$1, U$2 extends U$1 = U$1>(_pred: PH, fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduceWhile_0111<T, U$2>;
    <$SEL extends "01">(): <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0101<T, U>;
    <$SEL extends "001">(): <U>(_pred: PH, _fn: PH, initial: U) => reduceWhile_0011<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1001<T, U>;
};
type reduceWhile_1001<T, U> = {
    <U$1 extends U = U>(_fn: PH, initial: U$1): reduceWhile_1011<T, U$1>;
    <U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduceWhile_1111<U$2>;
    <$SEL extends "11">(): <U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduceWhile_1111<U$2>;
    <$SEL extends "1">(): <U$1 extends U = U>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1) => reduceWhile_1101<T, U$1>;
    <$SEL extends "01">(): <U$1 extends U = U>(_fn: PH, initial: U$1) => reduceWhile_1011<T, U$1>;
    <U$1 extends U = U>(fn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1): reduceWhile_1101<T, U$1>;
};
type reduceWhile_0101<T, U> = {
    <U$1 extends U = U>(_pred: PH, initial: U$1): reduceWhile_0111<T, U$1>;
    <U$1 extends U = U>(pred: (accumulator: U$1, value: T) => boolean, initial: U): reduceWhile_1111<U$1>;
    <$SEL extends "11">(): <U$1 extends U = U>(pred: (accumulator: U$1, value: T) => boolean, initial: U) => reduceWhile_1111<U$1>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1101<T, U>;
    <$SEL extends "01">(): <U$1 extends U = U>(_pred: PH, initial: U$1) => reduceWhile_0111<T, U$1>;
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1101<T, U>;
};
type reduceWhile_1101<T, U> = {
    <U$1 extends U = U>(initial: U$1): reduceWhile_1111<U$1>;
};
type reduceWhile_0011<T, U> = {
    (_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0111<T, U>;
    (pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1111<U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1111<U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1011<T, U>;
    <$SEL extends "01">(): (_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0111<T, U>;
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1011<T, U>;
};
type reduceWhile_1011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1111<U>;
};
type reduceWhile_0111<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1111<U>;
};
type reduceWhile_1111<U> = U;
export = reduceWhile;
