import { Variadic } from "./$types";
declare const partialRight: partialRight_00;
type partialRight_00 = {
    <T>(fn: Variadic<T>): partialRight_10<T>;
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
