import { Merge } from "./$operation";
declare const merge: merge_00;
type merge_00 = {
    <T>(a: T): merge_10<T>;
    <$SEL extends "1">(): <T>(a: T) => merge_10<T>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => merge_11<T, U>;
    <T, U>(a: T, b: U): merge_11<T, U>;
};
type merge_10<T> = {
    <U>(b: U): merge_11<T, U>;
};
type merge_01<U> = {
    <T>(a: T): merge_11<T, U>;
};
type merge_11<T, U> = Merge<T, U>;
export = merge;
