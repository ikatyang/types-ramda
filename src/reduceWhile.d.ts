import { List, Reduced } from "./$types";
declare const reduceWhile: reduceWhile_0000;
type reduceWhile_0000 = {
    <T, U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1000<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1000<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0100<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1100<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1110<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1100<T, U> = {
    (initial: U): reduceWhile_1110<T, U>;
    (initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0010<U> = {
    <T>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1010<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1010<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0110<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1110<T, U>;
    (pred: (accumulator: U, value: T) => boolean, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1110<T, U> = {
    (values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0001<T> = {
    <U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1001<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1001<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0101<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1101<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1101<T, U> = {
    (initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0011<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1011<T, U>;
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
