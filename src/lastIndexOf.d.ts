import { List } from "./$types";
declare const lastIndexOf: lastIndexOf_00;
type lastIndexOf_00 = {
    <T>(target: T): lastIndexOf_10<T>;
    <$SEL extends "1">(): <T>(target: T) => lastIndexOf_10<T>;
    <$SEL extends "11">(): <T>(target: T, list: List<T>) => lastIndexOf_11;
    <T>(target: T, list: List<T>): lastIndexOf_11;
};
type lastIndexOf_10<T> = {
    (list: List<T>): lastIndexOf_11;
};
type lastIndexOf_01<T> = {
    (target: T): lastIndexOf_11;
};
type lastIndexOf_11 = number;
export = lastIndexOf;
