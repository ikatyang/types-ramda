import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const all: all_00;
type all_00 = {
    <T>(fn: Predicate<T>): all_10<T>;
    <T>(_fn: PH, list: List<T>): all_01<T>;
    <T>(fn: Predicate<T>, list: List<T>): all_11;
};
type all_10<T> = {
    (list: List<T>): all_11;
};
type all_01<T> = {
    (fn: Predicate<T>): all_11;
};
type all_11 = boolean;
export = all;
