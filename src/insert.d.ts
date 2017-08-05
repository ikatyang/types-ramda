import { List } from "./$types";
declare const insert: insert_000;
type insert_000 = {
    (index: number): insert_100;
    <T>(index: number, value: T): insert_110<T>;
    <$SEL extends "1">(): (index: number) => insert_100;
    <$SEL extends "11">(): <T>(index: number, value: T) => insert_110<T>;
    <$SEL extends "111">(): <T, U>(index: number, value: T, list: List<U>) => insert_111<T, U>;
    <T, U>(index: number, value: T, list: List<U>): insert_111<T, U>;
};
type insert_100 = {
    <T>(value: T): insert_110<T>;
    <$SEL extends "1">(): <T>(value: T) => insert_110<T>;
    <$SEL extends "11">(): <T, U>(value: T, list: List<U>) => insert_111<T, U>;
    <T, U>(value: T, list: List<U>): insert_111<T, U>;
};
type insert_010<T> = {
    (index: number): insert_110<T>;
    <$SEL extends "1">(): (index: number) => insert_110<T>;
    <$SEL extends "11">(): <U>(index: number, list: List<U>) => insert_111<T, U>;
    <U>(index: number, list: List<U>): insert_111<T, U>;
};
type insert_110<T> = {
    <U>(list: List<U>): insert_111<T, U>;
};
type insert_001<U> = {
    (index: number): insert_101<U>;
    <$SEL extends "1">(): (index: number) => insert_101<U>;
    <$SEL extends "11">(): <T>(index: number, value: T) => insert_111<T, U>;
    <T>(index: number, value: T): insert_111<T, U>;
};
type insert_101<U> = {
    <T>(value: T): insert_111<T, U>;
};
type insert_011<T, U> = {
    (index: number): insert_111<T, U>;
};
type insert_111<T, U> = (T | U)[];
export = insert;
