import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const union: union_00;
type union_00 = {
    <T>(a: List<T>): union_10<T>;
    <T>(_a: PH, b: List<T>): union_01<T>;
    <$SEL extends "1">(): <T>(a: List<T>) => union_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: List<T>) => union_01<T>;
    <$SEL extends "11">(): <T>(a: List<T>, b: List<T>) => union_11<T>;
    <T>(a: List<T>, b: List<T>): union_11<T>;
};
type union_10<T> = {
    (b: List<T>): union_11<T>;
};
type union_01<T> = {
    (a: List<T>): union_11<T>;
};
type union_11<T> = T[];
export = union;
