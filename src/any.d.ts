import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const any: any_00;
type any_00 = {
    <T>(fn: Predicate<T>): any_10<T>;
    <T>(_fn: PH, list: List<T>): any_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => any_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => any_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => any_11;
    <T>(fn: Predicate<T>, list: List<T>): any_11;
};
type any_10<T> = {
    (list: List<T>): any_11;
};
type any_01<T> = {
    (fn: Predicate<T>): any_11;
};
type any_11 = boolean;
export = any;
