import { Placeholder as PH } from "./$placeholder";
declare const mergeDeepWith: mergeDeepWith_000;
type mergeDeepWith_000 = {
    <V>(fn: (a: V, b: V) => any): mergeDeepWith_100<V>;
    (_fn: PH, left: object): mergeDeepWith_010;
    <V>(fn: (a: V, b: V) => any, left: object): mergeDeepWith_110<V>;
    (_fn: PH, _left: PH, right: object): mergeDeepWith_001;
    (_fn: PH, left: object, right: object): mergeDeepWith_011;
    <V>(fn: (a: V, b: V) => any, _left: PH, right: object): mergeDeepWith_101<V>;
    <V>(fn: (a: V, b: V) => any, left: object, right: object): mergeDeepWith_111;
};
type mergeDeepWith_100<V> = {
    (left: object): mergeDeepWith_110<V>;
    (_left: PH, right: object): mergeDeepWith_101<V>;
    (left: object, right: object): mergeDeepWith_111;
};
type mergeDeepWith_010 = {
    <V>(fn: (a: V, b: V) => any): mergeDeepWith_110<V>;
    (_fn: PH, right: object): mergeDeepWith_011;
    <V>(fn: (a: V, b: V) => any, right: object): mergeDeepWith_111;
};
type mergeDeepWith_110<V> = {
    (right: object): mergeDeepWith_111;
};
type mergeDeepWith_001 = {
    <V>(fn: (a: V, b: V) => any): mergeDeepWith_101<V>;
    (_fn: PH, left: object): mergeDeepWith_011;
    <V>(fn: (a: V, b: V) => any, left: object): mergeDeepWith_111;
};
type mergeDeepWith_101<V> = {
    (left: object): mergeDeepWith_111;
};
type mergeDeepWith_011 = {
    <V>(fn: (a: V, b: V) => any): mergeDeepWith_111;
};
type mergeDeepWith_111 = object;
export = mergeDeepWith;
