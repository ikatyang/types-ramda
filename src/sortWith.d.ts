import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const sortWith: sortWith_00;
type sortWith_00 = {
    <T>(fns: Comparator<T, number>[]): sortWith_10<T>;
    <T>(_fns: PH, list: List<T>): sortWith_01<T>;
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
