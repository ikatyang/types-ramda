import { Comparator, List } from "./$types";
declare const groupWith: groupWith_00;
type groupWith_00 = {
    <T>(fn: Comparator<T, boolean>): groupWith_10<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => groupWith_10<T>;
    <$SEL extends "11">(): <T, U extends List<T>>(fn: Comparator<T, boolean>, list: U) => groupWith_11<T, U>;
    <T, U extends List<T>>(fn: Comparator<T, boolean>, list: U): groupWith_11<T, U>;
};
type groupWith_10<T> = {
    <U extends List<T>>(list: U): groupWith_11<T, U>;
};
type groupWith_01<T, U extends List<T>> = {
    (fn: Comparator<T, boolean>): groupWith_11<T, U>;
};
type groupWith_11<T, U extends List<T>> = U[];
export = groupWith;
