import { List } from "./$types";
declare const without: without_00;
type without_00 = {
    <T>(a: List<T>): without_10<T>;
    <T>(a: List<T>, b: List<T>): without_11<T>;
};
type without_10<T> = {
    (b: List<T>): without_11<T>;
};
type without_01<T> = {
    (a: List<T>): without_11<T>;
};
type without_11<T> = T[];
export = without;
