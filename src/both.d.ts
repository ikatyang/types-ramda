import { Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const both: both_00;
type both_00 = {
    <T>(fn1: Predicate<T>): both_10<T>;
    <T>(_fn1: PH, fn2: Predicate<T>): both_01<T>;
    <T>(fn1: Predicate<T>, fn2: Predicate<T>): both_11<T>;
};
type both_10<T> = {
    (fn2: Predicate<T>): both_11<T>;
};
type both_01<T> = {
    (fn1: Predicate<T>): both_11<T>;
};
type both_11<T> = Predicate<T>;
export = both;
