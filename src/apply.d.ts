import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const apply: apply_00;
type apply_00 = {
    <T>(fn: Variadic<T>): apply_10<T>;
    (_fn: PH, args: any[]): apply_01;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => apply_10<T>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => apply_01;
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
