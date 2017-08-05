import { Comparator, List } from "./$types";
declare const sort: sort_00;
type sort_00 = {
    <T>(fn: Comparator<T, number>): sort_10<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, number>) => sort_10<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, number>, list: List<T>) => sort_11<T>;
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
