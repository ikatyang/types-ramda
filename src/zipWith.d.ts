import { List } from "./$types";
declare const zipWith: zipWith_000;
type zipWith_000 = {
    <T, U, R>(fn: (x: T, y: U) => R): zipWith_100<T, U, R>;
    <T, U, R>(fn: (x: T, y: U) => R, a: List<T>): zipWith_110<T, U, R>;
    <T, U, R>(fn: (x: T, y: U) => R, a: List<T>, b: List<U>): zipWith_111<R>;
};
type zipWith_100<T, U, R> = {
    (a: List<T>): zipWith_110<T, U, R>;
    (a: List<T>, b: List<U>): zipWith_111<R>;
};
type zipWith_010<T> = {
    <U, R>(fn: (x: T, y: U) => R): zipWith_110<T, U, R>;
    <U, R>(fn: (x: T, y: U) => R, b: List<U>): zipWith_111<R>;
};
type zipWith_110<T, U, R> = {
    (b: List<U>): zipWith_111<R>;
};
type zipWith_001<U> = {
    <T, R>(fn: (x: T, y: U) => R): zipWith_101<T, U, R>;
    <T, R>(fn: (x: T, y: U) => R, a: List<T>): zipWith_111<R>;
};
type zipWith_101<T, U, R> = {
    (a: List<T>): zipWith_111<R>;
};
type zipWith_011<T, U> = {
    <R>(fn: (x: T, y: U) => R): zipWith_111<R>;
};
type zipWith_111<R> = R[];
export = zipWith;
