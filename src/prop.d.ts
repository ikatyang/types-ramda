import { List, Property } from "./$types";
declare const prop: prop_00;
type prop_00 = {
    <T extends {}, K extends keyof T>(key: K): prop_keyof_10<T, K>;
    <K extends string>(key: K): prop_record_10<K>;
    (key: Property): prop_general_10;
    <T extends {}, K extends keyof T>(key: K, object: T): prop_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): prop_record_11<K, T>;
    (key: Property, object: {}): prop_general_11;
};
type prop_keyof_10<T extends {}, K extends keyof T> = {
    (object: T): prop_keyof_11<T, K>;
};
type prop_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): prop_record_11<K, T>;
};
type prop_general_10 = {
    (object: {}): prop_general_11;
};
type prop_keyof_01<T extends {}> = {
    <K extends keyof T>(key: K): prop_keyof_11<T, K>;
};
type prop_record_01<K extends string, T extends Record<K, any>> = {
    (key: K): prop_record_11<K, T>;
};
type prop_general_01 = {
    (key: Property): prop_general_11;
};
type prop_keyof_11<T extends {}, K extends keyof T> = T[K];
type prop_record_11<K extends string, T extends Record<K, any>> = T[K];
type prop_general_11 = any;
export = prop;
