import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const insert: insert_000;
type insert_000 = {
    (index: number): insert_100;
    <T>(_index: PH, value: T): insert_010<T>;
    <T>(index: number, value: T): insert_110<T>;
    <U>(_index: PH, _value: PH, list: List<U>): insert_001<U>;
    <T, U>(_index: PH, value: T, list: List<U>): insert_011<T, U>;
    <U>(index: number, _value: PH, list: List<U>): insert_101<U>;
    <T, U>(index: number, value: T, list: List<U>): insert_111<T, U>;
};
type insert_100 = {
    <T>(value: T): insert_110<T>;
    <U>(_value: PH, list: List<U>): insert_101<U>;
    <T, U>(value: T, list: List<U>): insert_111<T, U>;
};
type insert_010<T> = {
    (index: number): insert_110<T>;
    <U>(_index: PH, list: List<U>): insert_011<T, U>;
    <U>(index: number, list: List<U>): insert_111<T, U>;
};
type insert_110<T> = {
    <U>(list: List<U>): insert_111<T, U>;
};
type insert_001<U> = {
    (index: number): insert_101<U>;
    <T>(_index: PH, value: T): insert_011<T, U>;
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
