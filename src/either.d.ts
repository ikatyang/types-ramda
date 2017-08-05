import { Predicate } from "./$types";
declare const either: either_00;
type either_00 = {
    <T>(fn1: Predicate<T>): either_10<T>;
    <$SEL extends "1">(): <T>(fn1: Predicate<T>) => either_10<T>;
    <$SEL extends "11">(): <T>(fn1: Predicate<T>, fn2: Predicate<T>) => either_11<T>;
    <T>(fn1: Predicate<T>, fn2: Predicate<T>): either_11<T>;
};
type either_10<T> = {
    (fn2: Predicate<T>): either_11<T>;
};
type either_01<T> = {
    (fn1: Predicate<T>): either_11<T>;
};
type either_11<T> = Predicate<T>;
export = either;
