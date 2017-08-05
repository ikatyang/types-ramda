import { List, Predicate } from "./$types";
declare const findLastIndex: findLastIndex_00;
type findLastIndex_00 = {
    <T>(fn: Predicate<T>): findLastIndex_10<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => findLastIndex_10<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => findLastIndex_11;
    <T>(fn: Predicate<T>, list: List<T>): findLastIndex_11;
};
type findLastIndex_10<T> = {
    (list: List<T>): findLastIndex_11;
};
type findLastIndex_01<T> = {
    (fn: Predicate<T>): findLastIndex_11;
};
type findLastIndex_11 = number;
export = findLastIndex;
