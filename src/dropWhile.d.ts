import { List, Predicate } from "./$types";
declare const dropWhile: dropWhile_00;
type dropWhile_00 = {
    <T>(fn: Predicate<T>): dropWhile_10<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => dropWhile_10<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => dropWhile_11<T>;
    <T>(fn: Predicate<T>, list: List<T>): dropWhile_11<T>;
};
type dropWhile_10<T> = {
    (list: List<T>): dropWhile_11<T>;
};
type dropWhile_01<T> = {
    (fn: Predicate<T>): dropWhile_11<T>;
};
type dropWhile_11<T> = T[];
export = dropWhile;
