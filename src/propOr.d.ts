import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propOr: propOr_000;
type propOr_000 = {
    <D>(defaults: D): propOr_keyof_100<D>;
    <D>(defaults: D): propOr_record_100<D>;
    (defaults: any): propOr_general_100;
    <T extends {}, K extends keyof T>(_defaults: PH, key: K): propOr_keyof_010<T, K>;
    <K extends string>(_defaults: PH, key: K): propOr_record_010<K>;
    (_defaults: PH, key: Property): propOr_general_010;
    <D, T extends {}, K extends keyof T>(defaults: D, key: K): propOr_keyof_110<D, T, K>;
    <D, K extends string>(defaults: D, key: K): propOr_record_110<D, K>;
    (defaults: any, key: Property): propOr_general_110;
    <T extends {}>(_defaults: PH, _key: PH, object: T): propOr_keyof_001<T>;
    <K extends string, T extends Record<K, any>>(_defaults: PH, _key: PH, object: T): propOr_record_001<K, T>;
    (_defaults: PH, _key: PH, object: {}): propOr_general_001;
    <T extends {}, K extends keyof T>(_defaults: PH, key: K, object: T): propOr_keyof_011<T, K>;
    <K extends string, T extends Record<K, any>>(_defaults: PH, key: K, object: T): propOr_record_011<K, T>;
    (_defaults: PH, key: Property, object: {}): propOr_general_011;
    <D, T extends {}>(defaults: D, _key: PH, object: T): propOr_keyof_101<D, T>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, _key: PH, object: T): propOr_record_101<D, K, T>;
    (defaults: any, _key: PH, object: {}): propOr_general_101;
    <D, T extends {}, K extends keyof T>(defaults: D, key: K, object: T): propOr_keyof_111<D, T, K>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T): propOr_record_111<D, K, T>;
    <$SEL extends "1", $KIND extends "keyof">(): <D>(defaults: D) => propOr_keyof_100<D>;
    <$SEL extends "1", $KIND extends "record">(): <D>(defaults: D) => propOr_record_100<D>;
    <$SEL extends "1", $KIND extends "general">(): (defaults: any) => propOr_general_100;
    <$SEL extends "01", $KIND extends "keyof">(): <T extends {}, K extends keyof T>(_defaults: PH, key: K) => propOr_keyof_010<T, K>;
    <$SEL extends "01", $KIND extends "record">(): <K extends string>(_defaults: PH, key: K) => propOr_record_010<K>;
    <$SEL extends "01", $KIND extends "general">(): (_defaults: PH, key: Property) => propOr_general_010;
    <$SEL extends "11", $KIND extends "keyof">(): <D, T extends {}, K extends keyof T>(defaults: D, key: K) => propOr_keyof_110<D, T, K>;
    <$SEL extends "11", $KIND extends "record">(): <D, K extends string>(defaults: D, key: K) => propOr_record_110<D, K>;
    <$SEL extends "11", $KIND extends "general">(): (defaults: any, key: Property) => propOr_general_110;
    <$SEL extends "001", $KIND extends "keyof">(): <T extends {}>(_defaults: PH, _key: PH, object: T) => propOr_keyof_001<T>;
    <$SEL extends "001", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_defaults: PH, _key: PH, object: T) => propOr_record_001<K, T>;
    <$SEL extends "001", $KIND extends "general">(): (_defaults: PH, _key: PH, object: {}) => propOr_general_001;
    <$SEL extends "011", $KIND extends "keyof">(): <T extends {}, K extends keyof T>(_defaults: PH, key: K, object: T) => propOr_keyof_011<T, K>;
    <$SEL extends "011", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_defaults: PH, key: K, object: T) => propOr_record_011<K, T>;
    <$SEL extends "011", $KIND extends "general">(): (_defaults: PH, key: Property, object: {}) => propOr_general_011;
    <$SEL extends "101", $KIND extends "keyof">(): <D, T extends {}>(defaults: D, _key: PH, object: T) => propOr_keyof_101<D, T>;
    <$SEL extends "101", $KIND extends "record">(): <D, K extends string, T extends Record<K, any>>(defaults: D, _key: PH, object: T) => propOr_record_101<D, K, T>;
    <$SEL extends "101", $KIND extends "general">(): (defaults: any, _key: PH, object: {}) => propOr_general_101;
    <$SEL extends "111", $KIND extends "keyof">(): <D, T extends {}, K extends keyof T>(defaults: D, key: K, object: T) => propOr_keyof_111<D, T, K>;
    <$SEL extends "111", $KIND extends "record">(): <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T) => propOr_record_111<D, K, T>;
    <$SEL extends "111", $KIND extends "general">(): (defaults: any, key: Property, object: {}) => propOr_general_111;
    (defaults: any, key: Property, object: {}): propOr_general_111;
};
type propOr_keyof_100<D> = {
    <T extends {}, K extends keyof T>(key: K): propOr_keyof_110<D, T, K>;
    <T extends {}>(_key: PH, object: T): propOr_keyof_101<D, T>;
    <$SEL extends "1">(): <T extends {}, K extends keyof T>(key: K) => propOr_keyof_110<D, T, K>;
    <$SEL extends "01">(): <T extends {}>(_key: PH, object: T) => propOr_keyof_101<D, T>;
    <$SEL extends "11">(): <T extends {}, K extends keyof T>(key: K, object: T) => propOr_keyof_111<D, T, K>;
    <T extends {}, K extends keyof T>(key: K, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_100<D> = {
    <K extends string>(key: K): propOr_record_110<D, K>;
    <K extends string, T extends Record<K, any>>(_key: PH, object: T): propOr_record_101<D, K, T>;
    <$SEL extends "1">(): <K extends string>(key: K) => propOr_record_110<D, K>;
    <$SEL extends "01">(): <K extends string, T extends Record<K, any>>(_key: PH, object: T) => propOr_record_101<D, K, T>;
    <$SEL extends "11">(): <K extends string, T extends Record<K, any>>(key: K, object: T) => propOr_record_111<D, K, T>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_100 = {
    (key: Property): propOr_general_110;
    (_key: PH, object: {}): propOr_general_101;
    <$SEL extends "1">(): (key: Property) => propOr_general_110;
    <$SEL extends "01">(): (_key: PH, object: {}) => propOr_general_101;
    <$SEL extends "11">(): (key: Property, object: {}) => propOr_general_111;
    (key: Property, object: {}): propOr_general_111;
};
type propOr_keyof_010<T extends {}, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_110<D, T, K>;
    (_defaults: PH, object: T): propOr_keyof_011<T, K>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_keyof_110<D, T, K>;
    <$SEL extends "01">(): (_defaults: PH, object: T) => propOr_keyof_011<T, K>;
    <$SEL extends "11">(): <D>(defaults: D, object: T) => propOr_keyof_111<D, T, K>;
    <D>(defaults: D, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_010<K extends string> = {
    <D>(defaults: D): propOr_record_110<D, K>;
    <T extends Record<K, any>>(_defaults: PH, object: T): propOr_record_011<K, T>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_record_110<D, K>;
    <$SEL extends "01">(): <T extends Record<K, any>>(_defaults: PH, object: T) => propOr_record_011<K, T>;
    <$SEL extends "11">(): <D, T extends Record<K, any>>(defaults: D, object: T) => propOr_record_111<D, K, T>;
    <D, T extends Record<K, any>>(defaults: D, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_010 = {
    (defaults: any): propOr_general_110;
    (_defaults: PH, object: {}): propOr_general_011;
    <$SEL extends "1">(): (defaults: any) => propOr_general_110;
    <$SEL extends "01">(): (_defaults: PH, object: {}) => propOr_general_011;
    <$SEL extends "11">(): (defaults: any, object: {}) => propOr_general_111;
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
    <K extends keyof T>(_defaults: PH, key: K): propOr_keyof_011<T, K>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_keyof_101<D, T>;
    <$SEL extends "01">(): <K extends keyof T>(_defaults: PH, key: K) => propOr_keyof_011<T, K>;
    <$SEL extends "11">(): <D, K extends keyof T>(defaults: D, key: K) => propOr_keyof_111<D, T, K>;
    <D, K extends keyof T>(defaults: D, key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_001<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_101<D, K, T>;
    (_defaults: PH, key: K): propOr_record_011<K, T>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_record_101<D, K, T>;
    <$SEL extends "01">(): (_defaults: PH, key: K) => propOr_record_011<K, T>;
    <$SEL extends "11">(): <D>(defaults: D, key: K) => propOr_record_111<D, K, T>;
    <D>(defaults: D, key: K): propOr_record_111<D, K, T>;
};
type propOr_general_001 = {
    (defaults: any): propOr_general_101;
    (_defaults: PH, key: Property): propOr_general_011;
    <$SEL extends "1">(): (defaults: any) => propOr_general_101;
    <$SEL extends "01">(): (_defaults: PH, key: Property) => propOr_general_011;
    <$SEL extends "11">(): (defaults: any, key: Property) => propOr_general_111;
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
