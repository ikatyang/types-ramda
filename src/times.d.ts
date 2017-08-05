import { Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const times: times_00;
type times_00 = {
    <T>(fn: Morphism<number, T>): times_10<T>;
    (_fn: PH, n: number): times_01;
    <T>(fn: Morphism<number, T>, n: number): times_11<T>;
};
type times_10<T> = {
    (n: number): times_11<T>;
};
type times_01 = {
    <T>(fn: Morphism<number, T>): times_11<T>;
};
type times_11<T> = T[];
export = times;
