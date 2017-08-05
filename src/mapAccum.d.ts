import { List } from "./$types";
declare const mapAccum: mapAccum_000;
type mapAccum_000 = {
    <T, U, R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_100<T, U, R>;
    <T, U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U): mapAccum_110<T, U, R>;
    <T, U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U, list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_100<T, U, R> = {
    (initial: U): mapAccum_110<T, U, R>;
    (initial: U, list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_010<U> = {
    <T, R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_110<T, U, R>;
    <T, R>(fn: (accumulator: U, value: T) => [U, R], list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_110<T, U, R> = {
    (list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_001<T> = {
    <U, R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_101<T, U, R>;
    <U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U): mapAccum_111<U, R>;
};
type mapAccum_101<T, U, R> = {
    (initial: U): mapAccum_111<U, R>;
};
type mapAccum_011<T, U> = {
    <R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_111<U, R>;
};
type mapAccum_111<U, R> = [U, R[]];
export = mapAccum;
