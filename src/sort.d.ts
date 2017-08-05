import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const sort: sort_00;
type sort_00 = {
    <T>(fn: Comparator<T, number>): sort_10<T>;
    <T>(_fn: PH, list: List<T>): sort_01<T>;
    <T>(fn: Comparator<T, number>, list: List<T>): sort_11<T>;
};
type sort_10<T> = {
    (list: List<T>): sort_11<T>;
};
type sort_01<T> = {
    (fn: Comparator<T, number>): sort_11<T>;
};
type sort_11<T> = T[];
export = sort;
