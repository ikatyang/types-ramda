import { Morphism, Predicate } from "./$types";
declare const when: when_000;
type when_000 = {
    <T>(pred: Predicate<T>): when_100<T>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_110<T, U>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => when_100<T>;
    <$SEL extends "11">(): <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>) => when_110<T, U>;
    <$SEL extends "111">(): <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T) => when_111<T, U>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
type when_100<T> = {
    <U>(whenTrueFn: Morphism<T, U>): when_110<T, U>;
    <$SEL extends "1">(): <U>(whenTrueFn: Morphism<T, U>) => when_110<T, U>;
    <$SEL extends "11">(): <U>(whenTrueFn: Morphism<T, U>, value: T) => when_111<T, U>;
    <U>(whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
type when_010<T, U> = {
    (pred: Predicate<T>): when_110<T, U>;
    <$SEL extends "1">(): (pred: Predicate<T>) => when_110<T, U>;
    <$SEL extends "11">(): (pred: Predicate<T>, value: T) => when_111<T, U>;
    (pred: Predicate<T>, value: T): when_111<T, U>;
};
type when_110<T, U> = {
    (value: T): when_111<T, U>;
};
type when_001<T> = {
    (pred: Predicate<T>): when_101<T>;
    <$SEL extends "1">(): (pred: Predicate<T>) => when_101<T>;
    <$SEL extends "11">(): <U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>) => when_111<T, U>;
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
