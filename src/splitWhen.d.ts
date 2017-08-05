import { List, Predicate } from "./$types";
declare const splitWhen: splitWhen_00;
type splitWhen_00 = {
    <T>(fn: Predicate<T>): splitWhen_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): splitWhen_11<T>;
};
type splitWhen_10<T> = {
    (list: List<T>): splitWhen_11<T>;
};
type splitWhen_01<T> = {
    (fn: Predicate<T>): splitWhen_11<T>;
};
type splitWhen_11<T> = [T, T];
export = splitWhen;
