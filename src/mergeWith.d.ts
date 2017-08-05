import { Omit, Same } from "./$operation";
import { Placeholder as PH } from "./$placeholder";
declare const mergeWith: mergeWith_000;
type mergeWith_000 = {
    <V, W>(fn: (a: V, b: V) => W): mergeWith_100<V, W>;
    <T>(_fn: PH, left: T): mergeWith_010<T>;
    <T, V, W>(fn: (a: V, b: V) => W, left: T): mergeWith_110<T, V, W>;
    <U>(_fn: PH, _left: PH, right: U): mergeWith_001<U>;
    <T, U>(_fn: PH, left: T, right: U): mergeWith_011<T, U>;
    <U, V, W>(fn: (a: V, b: V) => W, _left: PH, right: U): mergeWith_101<U, V, W>;
    <T, U, V, W>(fn: (a: V, b: V) => W, left: T, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_100<V, W> = {
    <T>(left: T): mergeWith_110<T, V, W>;
    <U>(_left: PH, right: U): mergeWith_101<U, V, W>;
    <T, U>(left: T, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_010<T> = {
    <V, W>(fn: (a: V, b: V) => W): mergeWith_110<T, V, W>;
    <U>(_fn: PH, right: U): mergeWith_011<T, U>;
    <U, V, W>(fn: (a: V, b: V) => W, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_110<T, V, W> = {
    <U>(right: U): mergeWith_111<T, U, W>;
};
type mergeWith_001<U> = {
    <V, W>(fn: (a: V, b: V) => W): mergeWith_101<U, V, W>;
    <T>(_fn: PH, left: T): mergeWith_011<T, U>;
    <T, V, W>(fn: (a: V, b: V) => W, left: T): mergeWith_111<T, U, W>;
};
type mergeWith_101<U, V, W> = {
    <T>(left: T): mergeWith_111<T, U, W>;
};
type mergeWith_011<T, U> = {
    <V, W>(fn: (a: V, b: V) => W): mergeWith_111<T, U, W>;
};
type mergeWith_111<T, U, W> = Omit<T, keyof U> & Omit<U, keyof T> & Record<Same<keyof T, keyof U>, W>;
export = mergeWith;
