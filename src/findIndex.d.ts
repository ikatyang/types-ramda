import { List, Predicate } from "./$types";
declare const findIndex: findIndex_00;
type findIndex_00 = {
    <T>(fn: Predicate<T>): findIndex_10<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => findIndex_10<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => findIndex_11;
    <T>(fn: Predicate<T>, list: List<T>): findIndex_11;
};
type findIndex_10<T> = {
    (list: List<T>): findIndex_11;
};
type findIndex_01<T> = {
    (fn: Predicate<T>): findIndex_11;
};
type findIndex_11 = number;
export = findIndex;
