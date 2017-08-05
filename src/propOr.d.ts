import { List, Property } from "./$types";
declare const propOr: propOr_000;
type propOr_000 = {
    <D>(defaults: D): propOr_keyof_100<D>;
    <D>(defaults: D): propOr_record_100<D>;
    (defaults: any): propOr_general_100;
    <D, T extends {}, K extends keyof T>(defaults: D, key: K): propOr_keyof_110<D, T, K>;
    <D, K extends string>(defaults: D, key: K): propOr_record_110<D, K>;
    (defaults: any, key: Property): propOr_general_110;
    <D, T extends {}, K extends keyof T>(defaults: D, key: K, object: T): propOr_keyof_111<D, T, K>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T): propOr_record_111<D, K, T>;
    (defaults: any, key: Property, object: {}): propOr_general_111;
};
type propOr_keyof_100<D> = {
    <T extends {}, K extends keyof T>(key: K): propOr_keyof_110<D, T, K>;
    <T extends {}, K extends keyof T>(key: K, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_100<D> = {
    <K extends string>(key: K): propOr_record_110<D, K>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_100 = {
    (key: Property): propOr_general_110;
    (key: Property, object: {}): propOr_general_111;
};
type propOr_keyof_010<T extends {}, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_110<D, T, K>;
    <D>(defaults: D, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_010<K extends string> = {
    <D>(defaults: D): propOr_record_110<D, K>;
    <D, T extends Record<K, any>>(defaults: D, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_010 = {
    (defaults: any): propOr_general_110;
    (defaults: any, object: {}): propOr_general_111;
};
type propOr_keyof_110<D, T extends {}, K extends keyof T> = {
    (object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_110<D, K extends string> = {
    <T extends Record<K, any>>(object: T): propOr_record_111<D, K, T>;
};
type propOr_general_110 = {
    (object: {}): propOr_general_111;
};
type propOr_keyof_001<T extends {}> = {
    <D>(defaults: D): propOr_keyof_101<D, T>;
    <D, K extends keyof T>(defaults: D, key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_001<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_101<D, K, T>;
    <D>(defaults: D, key: K): propOr_record_111<D, K, T>;
};
type propOr_general_001 = {
    (defaults: any): propOr_general_101;
    (defaults: any, key: Property): propOr_general_111;
};
type propOr_keyof_101<D, T extends {}> = {
    <K extends keyof T>(key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_101<D, K extends string, T extends Record<K, any>> = {
    (key: K): propOr_record_111<D, K, T>;
};
type propOr_general_101 = {
    (key: Property): propOr_general_111;
};
type propOr_keyof_011<T extends {}, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_111<D, T, K>;
};
type propOr_record_011<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_111<D, K, T>;
};
type propOr_general_011 = {
    (defaults: any): propOr_general_111;
};
type propOr_keyof_111<D, T extends {}, K extends keyof T> = T[K] | D;
type propOr_record_111<D, K extends string, T extends Record<K, any>> = T[K] | D;
type propOr_general_111 = any;
export = propOr;
