declare const mergeDeepWithKey: mergeDeepWithKey_000;
type mergeDeepWithKey_000 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_100<V>;
    <V>(fn: (key: string, a: V, b: V) => any, left: object): mergeDeepWithKey_110<V>;
    <V>(fn: (key: string, a: V, b: V) => any, left: object, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_100<V> = {
    (left: object): mergeDeepWithKey_110<V>;
    (left: object, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_010 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_110<V>;
    <V>(fn: (key: string, a: V, b: V) => any, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_110<V> = {
    (right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_001 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_101<V>;
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
