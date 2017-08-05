import { Omit, Same } from "./$operation";
import { Placeholder as PH } from "./$placeholder";
declare const mergeWithKey: mergeWithKey_000;
type mergeWithKey_000 = {
    <V, W>(fn: (key: string, a: V, b: V) => W): mergeWithKey_100<V, W>;
    <T>(_fn: PH, left: T): mergeWithKey_010<T>;
    <T, V, W>(fn: (key: string, a: V, b: V) => W, left: T): mergeWithKey_110<T, V, W>;
    <U>(_fn: PH, _left: PH, right: U): mergeWithKey_001<U>;
    <T, U>(_fn: PH, left: T, right: U): mergeWithKey_011<T, U>;
    <U, V, W>(fn: (key: string, a: V, b: V) => W, _left: PH, right: U): mergeWithKey_101<U, V, W>;
    <$SEL extends "1">(): <V, W>(fn: (key: string, a: V, b: V) => W) => mergeWithKey_100<V, W>;
    <$SEL extends "01">(): <T>(_fn: PH, left: T) => mergeWithKey_010<T>;
    <$SEL extends "11">(): <T, V, W>(fn: (key: string, a: V, b: V) => W, left: T) => mergeWithKey_110<T, V, W>;
    <$SEL extends "001">(): <U>(_fn: PH, _left: PH, right: U) => mergeWithKey_001<U>;
    <$SEL extends "011">(): <T, U>(_fn: PH, left: T, right: U) => mergeWithKey_011<T, U>;
    <$SEL extends "101">(): <U, V, W>(fn: (key: string, a: V, b: V) => W, _left: PH, right: U) => mergeWithKey_101<U, V, W>;
    <$SEL extends "111">(): <T, U, V, W>(fn: (key: string, a: V, b: V) => W, left: T, right: U) => mergeWithKey_111<T, U, W>;
    <T, U, V, W>(fn: (key: string, a: V, b: V) => W, left: T, right: U): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_100<V, W> = {
    <T>(left: T): mergeWithKey_110<T, V, W>;
    <U>(_left: PH, right: U): mergeWithKey_101<U, V, W>;
    <$SEL extends "1">(): <T>(left: T) => mergeWithKey_110<T, V, W>;
    <$SEL extends "01">(): <U>(_left: PH, right: U) => mergeWithKey_101<U, V, W>;
    <$SEL extends "11">(): <T, U>(left: T, right: U) => mergeWithKey_111<T, U, W>;
    <T, U>(left: T, right: U): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_010<T> = {
    <V, W>(fn: (key: string, a: V, b: V) => W): mergeWithKey_110<T, V, W>;
    <U>(_fn: PH, right: U): mergeWithKey_011<T, U>;
    <$SEL extends "1">(): <V, W>(fn: (key: string, a: V, b: V) => W) => mergeWithKey_110<T, V, W>;
    <$SEL extends "01">(): <U>(_fn: PH, right: U) => mergeWithKey_011<T, U>;
    <$SEL extends "11">(): <U, V, W>(fn: (key: string, a: V, b: V) => W, right: U) => mergeWithKey_111<T, U, W>;
    <U, V, W>(fn: (key: string, a: V, b: V) => W, right: U): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_110<T, V, W> = {
    <U>(right: U): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_001<U> = {
    <V, W>(fn: (key: string, a: V, b: V) => W): mergeWithKey_101<U, V, W>;
    <T>(_fn: PH, left: T): mergeWithKey_011<T, U>;
    <$SEL extends "1">(): <V, W>(fn: (key: string, a: V, b: V) => W) => mergeWithKey_101<U, V, W>;
    <$SEL extends "01">(): <T>(_fn: PH, left: T) => mergeWithKey_011<T, U>;
    <$SEL extends "11">(): <T, V, W>(fn: (key: string, a: V, b: V) => W, left: T) => mergeWithKey_111<T, U, W>;
    <T, V, W>(fn: (key: string, a: V, b: V) => W, left: T): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_101<U, V, W> = {
    <T>(left: T): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_011<T, U> = {
    <V, W>(fn: (key: string, a: V, b: V) => W): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_111<T, U, W> = Omit<T, keyof U> & Omit<U, keyof T> & Record<Same<keyof T, keyof U>, W>;
export = mergeWithKey;
