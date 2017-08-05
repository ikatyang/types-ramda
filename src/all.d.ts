import { List, Predicate } from "./$types";
declare const all: all_00;
type all_00 = {
    <T>(fn: Predicate<T>): all_10<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => all_10<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => all_11;
    <T>(fn: Predicate<T>, list: List<T>): all_11;
};
type all_10<T> = {
    (list: List<T>): all_11;
};
type all_01<T> = {
    (fn: Predicate<T>): all_11;
};
type all_11 = boolean;
export = all;
