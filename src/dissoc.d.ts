import { Omit } from "./$operation";
import { Property } from "./$types";
declare const dissoc: dissoc_00;
type dissoc_00 = {
    <T extends {}, K extends keyof T>(property: K): dissoc_keyof_10<T, K>;
    <V extends string>(property: V): dissoc_record_10<V>;
    (property: Property): dissoc_general_10;
    <T extends {}, K extends keyof T>(property: K, object: T): dissoc_keyof_11<T, K>;
    <U extends Record<V, any>, V extends string>(property: V, object: U): dissoc_record_11<U, V>;
    <T extends {}>(property: Property, object: T): dissoc_general_11<T>;
};
type dissoc_keyof_10<T extends {}, K extends keyof T> = {
    (object: T): dissoc_keyof_11<T, K>;
};
type dissoc_record_10<V extends string> = {
    <U extends Record<V, any>>(object: U): dissoc_record_11<U, V>;
};
type dissoc_general_10 = {
    <T extends {}>(object: T): dissoc_general_11<T>;
};
type dissoc_keyof_01<T extends {}> = {
    <K extends keyof T>(property: K): dissoc_keyof_11<T, K>;
};
type dissoc_record_01<U extends Record<V, any>, V extends string> = {
    (property: V): dissoc_record_11<U, V>;
};
type dissoc_general_01<T extends {}> = {
    (property: Property): dissoc_general_11<T>;
};
type dissoc_keyof_11<T extends {}, K extends keyof T> = Omit<T, K>;
type dissoc_record_11<U extends Record<V, any>, V extends string> = Omit<U, V>;
type dissoc_general_11<T extends {}> = T;
export = dissoc;
