import { Placeholder as PH } from "./$placeholder";
declare const defaultTo: defaultTo_00;
type defaultTo_00 = {
    <T>(defaults: T): defaultTo_10<T>;
    (_defaults: PH, value: null | undefined): defaultTo_void_01;
    <U>(_defaults: PH, value: U | null | undefined): defaultTo_general_01<U>;
    <T>(defaults: T, value: null | undefined): defaultTo_void_11<T>;
    <T, U>(defaults: T, value: U | null | undefined): defaultTo_general_11<T, U>;
};
type defaultTo_10<T> = {
    (value: null | undefined): defaultTo_void_11<T>;
    <U>(value: U | null | undefined): defaultTo_general_11<T, U>;
};
type defaultTo_void_01 = {
    <T>(defaults: T): defaultTo_void_11<T>;
};
type defaultTo_general_01<U> = {
    <T>(defaults: T): defaultTo_general_11<T, U>;
};
type defaultTo_void_11<T> = T;
type defaultTo_general_11<T, U> = T | U;
export = defaultTo;
