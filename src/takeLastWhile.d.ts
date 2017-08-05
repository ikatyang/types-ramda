import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const takeLastWhile: takeLastWhile_00;
type takeLastWhile_00 = {
    <T>(fn: Predicate<T>): takeLastWhile_10<T>;
    <T>(_fn: PH, list: List<T>): takeLastWhile_01<T>;
    <T>(fn: Predicate<T>, list: List<T>): takeLastWhile_11<T>;
};
type takeLastWhile_10<T> = {
    (list: List<T>): takeLastWhile_11<T>;
};
type takeLastWhile_01<T> = {
    (fn: Predicate<T>): takeLastWhile_11<T>;
};
type takeLastWhile_11<T> = T[];
export = takeLastWhile;
