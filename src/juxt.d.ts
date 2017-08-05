import { TypedVariadic } from "./$types";
declare const juxt: juxt_0;
type juxt_0 = {
    <T, U>(fns: TypedVariadic<T, U>[]): juxt_1<T, U>;
};
type juxt_1<T, U> = TypedVariadic<T, U[]>;
export = juxt;
