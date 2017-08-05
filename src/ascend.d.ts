import { Morphism, Ordered } from "./$types";
declare const ascend: ascend_000;
type ascend_000 = {
    <T>(fn: Morphism<T, Ordered>): ascend_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): ascend_110<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): ascend_111;
};
type ascend_100<T> = {
    (a: T): ascend_110<T>;
    (a: T, b: T): ascend_111;
};
type ascend_010<T> = {
    (fn: Morphism<T, Ordered>): ascend_110<T>;
    (fn: Morphism<T, Ordered>, b: T): ascend_111;
};
type ascend_110<T> = {
    (b: T): ascend_111;
};
type ascend_001<T> = {
    (fn: Morphism<T, Ordered>): ascend_101<T>;
    (fn: Morphism<T, Ordered>, a: T): ascend_111;
};
type ascend_101<T> = {
    (a: T): ascend_111;
};
type ascend_011<T> = {
    (fn: Morphism<T, Ordered>): ascend_111;
};
type ascend_111 = number;
export = ascend;
