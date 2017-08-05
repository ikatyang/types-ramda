import { Comparator, List } from "./$types";
declare const uniqWith: uniqWith_00;
type uniqWith_00 = {
    <T>(fn: Comparator<T, boolean>): uniqWith_10<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => uniqWith_10<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, list: List<T>) => uniqWith_11<T>;
    <T>(fn: Comparator<T, boolean>, list: List<T>): uniqWith_11<T>;
};
type uniqWith_10<T> = {
    (list: List<T>): uniqWith_11<T>;
};
type uniqWith_01<T> = {
    (fn: Comparator<T, boolean>): uniqWith_11<T>;
};
type uniqWith_11<T> = T[];
export = uniqWith;
