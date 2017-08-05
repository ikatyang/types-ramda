import { List, Predicate } from "./$types";
declare const none: none_00;
type none_00 = {
    <T>(fn: Predicate<T>): none_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): none_11;
};
type none_10<T> = {
    (list: List<T>): none_11;
};
type none_01<T> = {
    (fn: Predicate<T>): none_11;
};
type none_11 = boolean;
export = none;
