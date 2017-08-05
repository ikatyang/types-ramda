import { Variadic } from "./$types";
declare const apply: apply_00;
type apply_00 = {
    <T>(fn: Variadic<T>): apply_10<T>;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => apply_10<T>;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, args: any[]) => apply_11<T>;
    <T>(fn: Variadic<T>, args: any[]): apply_11<T>;
};
type apply_10<T> = {
    (args: any[]): apply_11<T>;
};
type apply_01 = {
    <T>(fn: Variadic<T>): apply_11<T>;
};
type apply_11<T> = T;
export = apply;
