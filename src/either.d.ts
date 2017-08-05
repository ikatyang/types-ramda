import { Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const either: either_00;
type either_00 = {
    <T>(fn1: Predicate<T>): either_10<T>;
    <T>(_fn1: PH, fn2: Predicate<T>): either_01<T>;
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
