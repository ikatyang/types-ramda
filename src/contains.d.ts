import { List } from "./$types";
declare const contains: contains_00;
type contains_00 = {
    <T>(value: T): contains_10<T>;
    <$SEL extends "1">(): <T>(value: T) => contains_10<T>;
    <$SEL extends "11">(): <T>(value: T, list: List<T>) => contains_11;
    <T>(value: T, list: List<T>): contains_11;
};
type contains_10<T> = {
    (list: List<T>): contains_11;
};
type contains_01<T> = {
    (value: T): contains_11;
};
type contains_11 = boolean;
export = contains;
