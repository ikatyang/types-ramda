import { List, Predicate } from "./$types";
declare const takeWhile: takeWhile_00;
type takeWhile_00 = {
    <T>(fn: Predicate<T>): takeWhile_10<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => takeWhile_10<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => takeWhile_11<T>;
    <T>(fn: Predicate<T>, list: List<T>): takeWhile_11<T>;
};
type takeWhile_10<T> = {
    (list: List<T>): takeWhile_11<T>;
};
type takeWhile_01<T> = {
    (fn: Predicate<T>): takeWhile_11<T>;
};
type takeWhile_11<T> = T[];
export = takeWhile;
