import { Variadic } from "./$types";
declare const binary: binary_0;
type binary_0 = {
    <T, U, R>(fn: (a: T, b: U, ...args: any[]) => R): binary_base_1<T, U, R>;
    <R>(fn: Variadic<R>): binary_variadic_1<R>;
};
type binary_base_1<T, U, R> = (a: T, b: U) => R;
type binary_variadic_1<R> = (a: any, b: any) => R;
export = binary;
