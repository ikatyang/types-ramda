import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pick: pick_00;
type pick_00 = {
    <T extends {}, K extends keyof T>(keys: List<K>): pick_keyof_10<T, K>;
    <V extends string>(keys: List<V>): pick_record_10<V>;
    (keys: List<Property>): pick_general_10;
    <T extends {}>(_keys: PH, object: T): pick_keyof_01<T>;
    <U extends Record<V, any>, V extends string>(_keys: PH, object: U): pick_record_01<U, V>;
    <T extends {}>(_keys: PH, object: T): pick_general_01<T>;
    <T extends {}, K extends keyof T>(keys: List<K>, object: T): pick_keyof_11<T, K>;
    <U extends Record<V, any>, V extends string>(keys: List<V>, object: U): pick_record_11<U, V>;
    <T extends {}>(keys: List<Property>, object: T): pick_general_11<T>;
};
type pick_keyof_10<T extends {}, K extends keyof T> = {
    (object: T): pick_keyof_11<T, K>;
};
type pick_record_10<V extends string> = {
    <U extends Record<V, any>>(object: U): pick_record_11<U, V>;
};
type pick_general_10 = {
    <T extends {}>(object: T): pick_general_11<T>;
};
type pick_keyof_01<T extends {}> = {
    <K extends keyof T>(keys: List<K>): pick_keyof_11<T, K>;
};
type pick_record_01<U extends Record<V, any>, V extends string> = {
    (keys: List<V>): pick_record_11<U, V>;
};
type pick_general_01<T extends {}> = {
    (keys: List<Property>): pick_general_11<T>;
};
type pick_keyof_11<T extends {}, K extends keyof T> = Pick<T, K>;
type pick_record_11<U extends Record<V, any>, V extends string> = Pick<U, V>;
type pick_general_11<T extends {}> = Partial<T>;
export = pick;
