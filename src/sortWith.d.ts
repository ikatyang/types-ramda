import { Comparator, List } from "./$types";
declare const sortWith: sortWith_00;
type sortWith_00 = {
    <T>(fns: Comparator<T, number>[]): sortWith_10<T>;
    <$SEL extends "1">(): <T>(fns: Comparator<T, number>[]) => sortWith_10<T>;
    <$SEL extends "11">(): <T>(fns: Comparator<T, number>[], list: List<T>) => sortWith_11<T>;
    <T>(fns: Comparator<T, number>[], list: List<T>): sortWith_11<T>;
};
type sortWith_10<T> = {
    (list: List<T>): sortWith_11<T>;
};
type sortWith_01<T> = {
    (fns: Comparator<T, number>[]): sortWith_11<T>;
};
type sortWith_11<T> = T[];
export = sortWith;
