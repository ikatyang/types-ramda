import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const findLast: findLast_00;
type findLast_00 = {
    <T>(fn: Predicate<T>): findLast_10<T>;
    <T>(_fn: PH, list: List<T>): findLast_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => findLast_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => findLast_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => findLast_11<T>;
    <T>(fn: Predicate<T>, list: List<T>): findLast_11<T>;
};
type findLast_10<T> = {
    (list: List<T>): findLast_11<T>;
};
type findLast_01<T> = {
    (fn: Predicate<T>): findLast_11<T>;
};
type findLast_11<T> = T | undefined;
export = findLast;
