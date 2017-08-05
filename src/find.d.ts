import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const find: find_00;
type find_00 = {
    <T>(fn: Predicate<T>): find_10<T>;
    <T>(_fn: PH, list: List<T>): find_01<T>;
    <T>(fn: Predicate<T>, list: List<T>): find_11<T>;
};
type find_10<T> = {
    (list: List<T>): find_11<T>;
};
type find_01<T> = {
    (fn: Predicate<T>): find_11<T>;
};
type find_11<T> = T | undefined;
export = find;
