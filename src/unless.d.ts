import { Morphism, Predicate } from "./$types";
declare const unless: unless_000;
type unless_000 = {
    <T>(pred: Predicate<T>): unless_100<T>;
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_110<T, U>;
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>, value: T): unless_111<T, U>;
};
type unless_100<T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_110<T, U>;
    <U>(whenFalseFn: Morphism<T, U>, value: T): unless_111<T, U>;
};
type unless_010<T, U> = {
    (pred: Predicate<T>): unless_110<T, U>;
    (pred: Predicate<T>, value: T): unless_111<T, U>;
};
type unless_110<T, U> = {
    (value: T): unless_111<T, U>;
};
type unless_001<T> = {
    (pred: Predicate<T>): unless_101<T>;
    <U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_111<T, U>;
};
type unless_101<T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_111<T, U>;
};
type unless_011<T, U> = {
    (pred: Predicate<T>): unless_111<T, U>;
};
type unless_111<T, U> = T | U;
export = unless;
