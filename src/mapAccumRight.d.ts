import { List } from "./$types";
declare const mapAccumRight: mapAccumRight_000;
type mapAccumRight_000 = {
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_100<T, U, R>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U): mapAccumRight_110<T, U, R>;
    <$SEL extends "1">(): <T, U, R>(fn: (value: T, accumulator: U) => [R, U]) => mapAccumRight_100<T, U, R>;
    <$SEL extends "11">(): <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U) => mapAccumRight_110<T, U, R>;
    <$SEL extends "111">(): <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U, list: List<T>) => mapAccumRight_111<U, R>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U, list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_100<T, U, R> = {
    (initial: U): mapAccumRight_110<T, U, R>;
    <$SEL extends "1">(): (initial: U) => mapAccumRight_110<T, U, R>;
    <$SEL extends "11">(): (initial: U, list: List<T>) => mapAccumRight_111<U, R>;
    (initial: U, list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_010<U> = {
    <T, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_110<T, U, R>;
    <$SEL extends "1">(): <T, R>(fn: (value: T, accumulator: U) => [R, U]) => mapAccumRight_110<T, U, R>;
    <$SEL extends "11">(): <T, R>(fn: (value: T, accumulator: U) => [R, U], list: List<T>) => mapAccumRight_111<U, R>;
    <T, R>(fn: (value: T, accumulator: U) => [R, U], list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_110<T, U, R> = {
    (list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_001<T> = {
    <U, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_101<T, U, R>;
    <$SEL extends "1">(): <U, R>(fn: (value: T, accumulator: U) => [R, U]) => mapAccumRight_101<T, U, R>;
    <$SEL extends "11">(): <U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U) => mapAccumRight_111<U, R>;
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
