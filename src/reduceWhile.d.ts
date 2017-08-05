import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const reduceWhile: reduceWhile_0000;
type reduceWhile_0000 = {
    <T, U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1000<T, U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0100<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    <U>(_pred: PH, _fn: PH, initial: U): reduceWhile_0010<U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_0110<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U): reduceWhile_1010<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    <T>(_pred: PH, _fn: PH, _initial: PH, values: List<T>): reduceWhile_0001<T>;
    <T, U>(_pred: PH, _fn: PH, initial: U, values: List<T>): reduceWhile_0011<T, U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduceWhile_0101<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, _initial: PH, values: List<T>): reduceWhile_1001<T, U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_0111<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U, values: List<T>): reduceWhile_1011<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1000<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    (_fn: PH, initial: U): reduceWhile_1010<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    (_fn: PH, _initial: PH, values: List<T>): reduceWhile_1001<T, U>;
    (_fn: PH, initial: U, values: List<T>): reduceWhile_1011<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0100<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1100<T, U>;
    (_pred: PH, initial: U): reduceWhile_0110<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1110<T, U>;
    (_pred: PH, _initial: PH, values: List<T>): reduceWhile_0101<T, U>;
    (_pred: PH, initial: U, values: List<T>): reduceWhile_0111<T, U>;
    (pred: (accumulator: U, value: T) => boolean, _initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1100<T, U> = {
    (initial: U): reduceWhile_1110<T, U>;
    (_initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    (initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0010<U> = {
    <T>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1010<T, U>;
    <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0110<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    <T>(_pred: PH, _fn: PH, values: List<T>): reduceWhile_0011<T, U>;
    <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_0111<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, _fn: PH, values: List<T>): reduceWhile_1011<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1010<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    (_fn: PH, values: List<T>): reduceWhile_1011<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0110<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1110<T, U>;
    (_pred: PH, values: List<T>): reduceWhile_0111<T, U>;
    (pred: (accumulator: U, value: T) => boolean, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1110<T, U> = {
    (values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0001<T> = {
    <U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1001<T, U>;
    <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0101<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    <U>(_pred: PH, _fn: PH, initial: U): reduceWhile_0011<T, U>;
    <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_0111<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U): reduceWhile_1011<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1001<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    (_fn: PH, initial: U): reduceWhile_1011<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0101<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1101<T, U>;
    (_pred: PH, initial: U): reduceWhile_0111<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1101<T, U> = {
    (initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0011<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1011<T, U>;
    (_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0111<T, U>;
    (pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1111<U>;
};
type reduceWhile_1011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1111<U>;
};
type reduceWhile_0111<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1111<U>;
};
type reduceWhile_1111<U> = U;
export = reduceWhile;
