import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const partial: partial_00;
type partial_00 = {
    <T>(fn: Variadic<T>): partial_10<T>;
    (_fn: PH, args: any[]): partial_01;
    <T>(fn: Variadic<T>, args: any[]): partial_11<T>;
};
type partial_10<T> = {
    (args: any[]): partial_11<T>;
};
type partial_01 = {
    <T>(fn: Variadic<T>): partial_11<T>;
};
type partial_11<T> = Variadic<T>;
export = partial;
