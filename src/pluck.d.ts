import { Functor, List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pluck: pluck_00;
type pluck_00 = {
    (index: number): pluck_list_10;
    <T, K extends keyof T>(key: K): pluck_keyof_10<T, K>;
    <K extends string>(key: K): pluck_record_10<K>;
    (key: Property): pluck_general_10;
    <U>(_index: PH, list: List<List<U>>): pluck_list_01<U>;
    <T>(_key: PH, list: List<T>): pluck_keyof_01<T>;
    <K extends string, V, T extends Record<K, V>>(_key: PH, list: List<T>): pluck_record_01<K, V, T>;
    (_key: PH, list: List<any>): pluck_general_01;
    <U>(index: number, list: List<List<U>>): pluck_list_11<U>;
    <T, K extends keyof T>(key: K, list: List<T>): pluck_keyof_11<T, K>;
    <K extends string, V, T extends Record<K, V>>(key: K, list: List<T>): pluck_record_11<K, V, T>;
    (key: Property, list: List<any>): pluck_general_11;
};
type pluck_list_10 = {
    <U>(list: List<List<U>>): pluck_list_11<U>;
};
type pluck_keyof_10<T, K extends keyof T> = {
    (list: List<T>): pluck_keyof_11<T, K>;
};
type pluck_record_10<K extends string> = {
    <V, T extends Record<K, V>>(list: List<T>): pluck_record_11<K, V, T>;
};
type pluck_general_10 = {
    (list: List<any>): pluck_general_11;
};
type pluck_list_01<U> = {
    (index: number): pluck_list_11<U>;
};
type pluck_keyof_01<T> = {
    <K extends keyof T>(key: K): pluck_keyof_11<T, K>;
};
type pluck_record_01<K extends string, V, T extends Record<K, V>> = {
    (key: K): pluck_record_11<K, V, T>;
};
type pluck_general_01 = {
    (key: Property): pluck_general_11;
};
type pluck_list_11<U> = U[];
type pluck_keyof_11<T, K extends keyof T> = T[K][];
type pluck_record_11<K extends string, V, T extends Record<K, V>> = T[K][];
type pluck_general_11 = any[];
export = pluck;
