import { Merge } from "./$operation";
import { Placeholder as PH } from "./$placeholder";
declare const merge: merge_00;
type merge_00 = {
    <T>(a: T): merge_10<T>;
    <U>(_a: PH, b: U): merge_01<U>;
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
