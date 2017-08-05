import { List } from "./$types";
declare const insertAll: insertAll_000;
type insertAll_000 = {
    (index: number): insertAll_100;
    <T>(index: number, values: List<T>): insertAll_110<T>;
    <$SEL extends "1">(): (index: number) => insertAll_100;
    <$SEL extends "11">(): <T>(index: number, values: List<T>) => insertAll_110<T>;
    <$SEL extends "111">(): <T, U>(index: number, values: List<T>, list: List<U>) => insertAll_111<T, U>;
    <T, U>(index: number, values: List<T>, list: List<U>): insertAll_111<T, U>;
};
type insertAll_100 = {
    <T>(values: List<T>): insertAll_110<T>;
    <$SEL extends "1">(): <T>(values: List<T>) => insertAll_110<T>;
    <$SEL extends "11">(): <T, U>(values: List<T>, list: List<U>) => insertAll_111<T, U>;
    <T, U>(values: List<T>, list: List<U>): insertAll_111<T, U>;
};
type insertAll_010<T> = {
    (index: number): insertAll_110<T>;
    <$SEL extends "1">(): (index: number) => insertAll_110<T>;
    <$SEL extends "11">(): <U>(index: number, list: List<U>) => insertAll_111<T, U>;
    <U>(index: number, list: List<U>): insertAll_111<T, U>;
};
type insertAll_110<T> = {
    <U>(list: List<U>): insertAll_111<T, U>;
};
type insertAll_001<U> = {
    (index: number): insertAll_101<U>;
    <$SEL extends "1">(): (index: number) => insertAll_101<U>;
    <$SEL extends "11">(): <T>(index: number, values: List<T>) => insertAll_111<T, U>;
    <T>(index: number, values: List<T>): insertAll_111<T, U>;
};
type insertAll_101<U> = {
    <T>(values: List<T>): insertAll_111<T, U>;
};
type insertAll_011<T, U> = {
    (index: number): insertAll_111<T, U>;
};
type insertAll_111<T, U> = (T | U)[];
export = insertAll;
