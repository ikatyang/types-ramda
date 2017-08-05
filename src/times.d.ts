import { Morphism } from "./$types";
declare const times: times_00;
type times_00 = {
    <T>(fn: Morphism<number, T>): times_10<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<number, T>) => times_10<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<number, T>, n: number) => times_11<T>;
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
