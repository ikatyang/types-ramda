import { List, Reduced } from "./$types";
declare const reduce: reduce_000;
type reduce_000 = {
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_100<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduce_110<T, U>;
    <$SEL extends "1">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_100<T, U>;
    <$SEL extends "11">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduce_110<T, U>;
    <$SEL extends "111">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduce_111<U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduce_111<U>;
};
type reduce_100<T, U> = {
    (initial: U): reduce_110<T, U>;
    <$SEL extends "1">(): (initial: U) => reduce_110<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => reduce_111<U>;
    (initial: U, values: List<T>): reduce_111<U>;
};
type reduce_010<U> = {
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_110<T, U>;
    <$SEL extends "1">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_110<T, U>;
    <$SEL extends "11">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => reduce_111<U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduce_111<U>;
};
type reduce_110<T, U> = {
    (values: List<T>): reduce_111<U>;
};
type reduce_001<T> = {
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_101<T, U>;
    <$SEL extends "1">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_101<T, U>;
    <$SEL extends "11">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduce_111<U>;
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduce_111<U>;
};
type reduce_101<T, U> = {
    (initial: U): reduce_111<U>;
};
type reduce_011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_111<U>;
};
type reduce_111<U> = U;
export = reduce;
