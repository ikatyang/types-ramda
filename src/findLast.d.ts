import { List, Predicate } from "./$types";
declare const findLast: findLast_00;
type findLast_00 = {
    <T>(fn: Predicate<T>): findLast_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): findLast_11<T>;
};
type findLast_10<T> = {
    (list: List<T>): findLast_11<T>;
};
type findLast_01<T> = {
    (fn: Predicate<T>): findLast_11<T>;
};
type findLast_11<T> = T | undefined;
export = findLast;
