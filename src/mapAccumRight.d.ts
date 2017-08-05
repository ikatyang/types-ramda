import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const mapAccumRight: mapAccumRight_000;
type mapAccumRight_000 = {
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_100<T, U, R>;
    <U>(_fn: PH, initial: U): mapAccumRight_010<U>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U): mapAccumRight_110<T, U, R>;
    <T>(_fn: PH, _initial: PH, list: List<T>): mapAccumRight_001<T>;
    <T, U>(_fn: PH, initial: U, list: List<T>): mapAccumRight_011<T, U>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], _initial: PH, list: List<T>): mapAccumRight_101<T, U, R>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U, list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_100<T, U, R> = {
    (initial: U): mapAccumRight_110<T, U, R>;
    (_initial: PH, list: List<T>): mapAccumRight_101<T, U, R>;
    (initial: U, list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_010<U> = {
    <T, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_110<T, U, R>;
    <T>(_fn: PH, list: List<T>): mapAccumRight_011<T, U>;
    <T, R>(fn: (value: T, accumulator: U) => [R, U], list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_110<T, U, R> = {
    (list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_001<T> = {
    <U, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_101<T, U, R>;
    <U>(_fn: PH, initial: U): mapAccumRight_011<T, U>;
    <U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U): mapAccumRight_111<U, R>;
};
type mapAccumRight_101<T, U, R> = {
    (initial: U): mapAccumRight_111<U, R>;
};
type mapAccumRight_011<T, U> = {
    <R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_111<U, R>;
};
type mapAccumRight_111<U, R> = [R[], U];
export = mapAccumRight;
