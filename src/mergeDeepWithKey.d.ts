import { Placeholder as PH } from "./$placeholder";
declare const mergeDeepWithKey: mergeDeepWithKey_000;
type mergeDeepWithKey_000 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_100<V>;
    (_fn: PH, left: object): mergeDeepWithKey_010;
    <V>(fn: (key: string, a: V, b: V) => any, left: object): mergeDeepWithKey_110<V>;
    (_fn: PH, _left: PH, right: object): mergeDeepWithKey_001;
    (_fn: PH, left: object, right: object): mergeDeepWithKey_011;
    <V>(fn: (key: string, a: V, b: V) => any, _left: PH, right: object): mergeDeepWithKey_101<V>;
    <V>(fn: (key: string, a: V, b: V) => any, left: object, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_100<V> = {
    (left: object): mergeDeepWithKey_110<V>;
    (_left: PH, right: object): mergeDeepWithKey_101<V>;
    (left: object, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_010 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_110<V>;
    (_fn: PH, right: object): mergeDeepWithKey_011;
    <V>(fn: (key: string, a: V, b: V) => any, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_110<V> = {
    (right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_001 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_101<V>;
    (_fn: PH, left: object): mergeDeepWithKey_011;
    <V>(fn: (key: string, a: V, b: V) => any, left: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_101<V> = {
    (left: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_011 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_111;
};
type mergeDeepWithKey_111 = object;
export = mergeDeepWithKey;
