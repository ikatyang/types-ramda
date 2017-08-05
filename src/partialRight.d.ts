import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const partialRight: partialRight_00;
type partialRight_00 = {
    <T>(fn: Variadic<T>): partialRight_10<T>;
    (_fn: PH, args: any[]): partialRight_01;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => partialRight_10<T>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => partialRight_01;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, args: any[]) => partialRight_11<T>;
    <T>(fn: Variadic<T>, args: any[]): partialRight_11<T>;
};
type partialRight_10<T> = {
    (args: any[]): partialRight_11<T>;
};
type partialRight_01 = {
    <T>(fn: Variadic<T>): partialRight_11<T>;
};
type partialRight_11<T> = Variadic<T>;
export = partialRight;
