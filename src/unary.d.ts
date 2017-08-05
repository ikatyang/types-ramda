import { Variadic } from "./$types";
declare const unary: unary_0;
type unary_0 = {
    <T, R>(fn: (a: T, ...args: any[]) => R): unary_base_1<T, R>;
    <R>(fn: Variadic<R>): unary_variadic_1<R>;
};
type unary_base_1<T, R> = (a: T) => R;
type unary_variadic_1<R> = (a: any) => R;
export = unary;
