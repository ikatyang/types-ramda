import { List, Predicate } from "./$types";
declare const dropLastWhile: dropLastWhile_00;
type dropLastWhile_00 = {
    <T>(fn: Predicate<T>): dropLastWhile_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): dropLastWhile_11<T>;
};
type dropLastWhile_10<T> = {
    (list: List<T>): dropLastWhile_11<T>;
};
type dropLastWhile_01<T> = {
    (fn: Predicate<T>): dropLastWhile_11<T>;
};
type dropLastWhile_11<T> = T[];
export = dropLastWhile;
