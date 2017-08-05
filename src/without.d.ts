import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const without: without_00;
type without_00 = {
    <T>(a: List<T>): without_10<T>;
    <T>(_a: PH, b: List<T>): without_01<T>;
    <$SEL extends "1">(): <T>(a: List<T>) => without_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: List<T>) => without_01<T>;
    <$SEL extends "11">(): <T>(a: List<T>, b: List<T>) => without_11<T>;
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
