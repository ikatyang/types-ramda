import { Variadic } from "./$types";
declare const unapply: unapply_0;
type unapply_0 = {
    <T>(fn: (args: any[]) => T): unapply_1<T>;
};
type unapply_1<T> = Variadic<T>;
export = unapply;
