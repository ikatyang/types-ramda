import { List } from "./$types";
declare const append: append_00;
type append_00 = {
    <T>(value: T): append_10<T>;
    <T, U>(value: T, list: List<U>): append_11<T, U>;
};
type append_10<T> = {
    <U>(list: List<U>): append_11<T, U>;
};
type append_01<U> = {
    <T>(value: T): append_11<T, U>;
};
type append_11<T, U> = (T | U)[];
export = append;
