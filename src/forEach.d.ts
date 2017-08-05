import { List, Tap } from "./$types";
declare const forEach: forEach_00;
type forEach_00 = {
    <T>(fn: Tap<T>): forEach_10<T>;
    <$SEL extends "1">(): <T>(fn: Tap<T>) => forEach_10<T>;
    <$SEL extends "11">(): <T, U extends List<T>>(fn: Tap<T>, list: U) => forEach_11<T, U>;
    <T, U extends List<T>>(fn: Tap<T>, list: U): forEach_11<T, U>;
};
type forEach_10<T> = {
    <U extends List<T>>(list: U): forEach_11<T, U>;
};
type forEach_01<T, U extends List<T>> = {
    (fn: Tap<T>): forEach_11<T, U>;
};
type forEach_11<T, U extends List<T>> = U;
export = forEach;
