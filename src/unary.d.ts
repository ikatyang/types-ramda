import { Variadic } from "./$types";
declare const unary: unary_0;
type unary_0 = {
    <T, R>(fn: (a: T, ...args: any[]) => R): unary_base_1<T, R>;
    <$SEL extends "1", $KIND extends "base">(): <T, R>(fn: (a: T, ...args: any[]) => R) => unary_base_1<T, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(fn: Variadic<R>) => unary_variadic_1<R>;
    <R>(fn: Variadic<R>): unary_variadic_1<R>;
};
type unary_base_1<T, R> = (a: T) => R;
type unary_variadic_1<R> = (a: any) => R;
export = unary;
