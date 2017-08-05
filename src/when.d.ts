import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const when: when_000;
type when_000 = {
    <T>(pred: Predicate<T>): when_100<T>;
    <T, U>(_pred: PH, whenTrueFn: Morphism<T, U>): when_010<T, U>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_110<T, U>;
    <T>(_pred: PH, _whenTrueFn: PH, value: T): when_001<T>;
    <T, U>(_pred: PH, whenTrueFn: Morphism<T, U>, value: T): when_011<T, U>;
    <T>(pred: Predicate<T>, _whenTrueFn: PH, value: T): when_101<T>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
type when_100<T> = {
    <U>(whenTrueFn: Morphism<T, U>): when_110<T, U>;
    (_whenTrueFn: PH, value: T): when_101<T>;
    <U>(whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
type when_010<T, U> = {
    (pred: Predicate<T>): when_110<T, U>;
    (_pred: PH, value: T): when_011<T, U>;
    (pred: Predicate<T>, value: T): when_111<T, U>;
};
type when_110<T, U> = {
    (value: T): when_111<T, U>;
};
type when_001<T> = {
    (pred: Predicate<T>): when_101<T>;
    <U>(_pred: PH, whenTrueFn: Morphism<T, U>): when_011<T, U>;
    <U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_111<T, U>;
};
type when_101<T> = {
    <U>(whenTrueFn: Morphism<T, U>): when_111<T, U>;
};
type when_011<T, U> = {
    (pred: Predicate<T>): when_111<T, U>;
};
type when_111<T, U> = T | U;
export = when;
