import { List, Property } from "./$types";
declare const props: props_00;
type props_00 = {
    <T extends {}, K extends keyof T>(keys: List<K>): props_keyof_10<T, K>;
    <K extends string>(keys: List<K>): props_record_10<K>;
    (keys: Property[]): props_general_10;
    <T extends {}, K extends keyof T>(keys: List<K>, object: T): props_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(keys: List<K>, object: T): props_record_11<K, T>;
    (keys: Property[], object: {}): props_general_11;
};
type props_keyof_10<T extends {}, K extends keyof T> = {
    (object: T): props_keyof_11<T, K>;
};
type props_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): props_record_11<K, T>;
};
type props_general_10 = {
    (object: {}): props_general_11;
};
type props_keyof_01<T extends {}> = {
    <K extends keyof T>(keys: List<K>): props_keyof_11<T, K>;
};
type props_record_01<K extends string, T extends Record<K, any>> = {
    (keys: List<K>): props_record_11<K, T>;
};
type props_general_01 = {
    (keys: Property[]): props_general_11;
};
type props_keyof_11<T extends {}, K extends keyof T> = T[K][];
type props_record_11<K extends string, T extends Record<K, any>> = T[K][];
type props_general_11 = any[];
export = props;
