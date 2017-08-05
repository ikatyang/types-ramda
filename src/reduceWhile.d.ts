import { List, Reduced } from "./$types";
declare const reduceWhile: reduceWhile_0000;
type reduceWhile_0000 = {
    <T, U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1000<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    <$SEL extends "1">(): <T, U>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1000<T, U>;
    <$SEL extends "11">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1100<T, U>;
    <$SEL extends "111">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "1111">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduceWhile_1111<U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1000<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1100<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "111">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduceWhile_1111<U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0100<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1100<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1110<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1100<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "111">(): (pred: (accumulator: U, value: T) => boolean, initial: U, values: List<T>) => reduceWhile_1111<U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1100<T, U> = {
    (initial: U): reduceWhile_1110<T, U>;
    <$SEL extends "1">(): (initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => reduceWhile_1111<U>;
    (initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0010<U> = {
    <T>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1010<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    <$SEL extends "1">(): <T>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1010<T, U>;
    <$SEL extends "11">(): <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1110<T, U>;
    <$SEL extends "111">(): <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => reduceWhile_1111<U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1010<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1110<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => reduceWhile_1111<U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0110<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1110<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1110<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, values: List<T>) => reduceWhile_1111<U>;
    (pred: (accumulator: U, value: T) => boolean, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1110<T, U> = {
    (values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0001<T> = {
    <U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1001<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    <$SEL extends "1">(): <U>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1001<T, U>;
    <$SEL extends "11">(): <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1101<T, U>;
    <$SEL extends "111">(): <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1111<U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1001<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1101<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1111<U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0101<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1101<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1101<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, initial: U) => reduceWhile_1111<U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1101<T, U> = {
    (initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0011<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1011<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1011<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1111<U>;
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
