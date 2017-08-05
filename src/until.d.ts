import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const until: until_000;
type until_000 = {
    <T>(pred: Predicate<T>): until_100<T>;
    <T>(_pred: PH, fn: Morphism<T, T>): until_010<T>;
    <T>(pred: Predicate<T>, fn: Morphism<T, T>): until_110<T>;
    <T>(_pred: PH, _fn: PH, initial: T): until_001<T>;
    <T>(_pred: PH, fn: Morphism<T, T>, initial: T): until_011<T>;
    <T>(pred: Predicate<T>, _fn: PH, initial: T): until_101<T>;
    <T>(pred: Predicate<T>, fn: Morphism<T, T>, initial: T): until_111<T>;
};
type until_100<T> = {
    (fn: Morphism<T, T>): until_110<T>;
    (_fn: PH, initial: T): until_101<T>;
    (fn: Morphism<T, T>, initial: T): until_111<T>;
};
type until_010<T> = {
    (pred: Predicate<T>): until_110<T>;
    (_pred: PH, initial: T): until_011<T>;
    (pred: Predicate<T>, initial: T): until_111<T>;
};
type until_110<T> = {
    (initial: T): until_111<T>;
};
type until_001<T> = {
    (pred: Predicate<T>): until_101<T>;
    (_pred: PH, fn: Morphism<T, T>): until_011<T>;
    (pred: Predicate<T>, fn: Morphism<T, T>): until_111<T>;
};
type until_101<T> = {
    (fn: Morphism<T, T>): until_111<T>;
};
type until_011<T> = {
    (pred: Predicate<T>): until_111<T>;
};
type until_111<T> = T;
export = until;
