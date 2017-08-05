import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const findIndex: findIndex_00;
type findIndex_00 = {
    <T>(fn: Predicate<T>): findIndex_10<T>;
    <T>(_fn: PH, list: List<T>): findIndex_01<T>;
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
