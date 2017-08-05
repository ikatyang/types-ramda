import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const ascend: ascend_000;
type ascend_000 = {
    <T>(fn: Morphism<T, Ordered>): ascend_100<T>;
    <T>(_fn: PH, a: T): ascend_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): ascend_110<T>;
    <T>(_fn: PH, _a: PH, b: T): ascend_001<T>;
    <T>(_fn: PH, a: T, b: T): ascend_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): ascend_101<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): ascend_111;
};
type ascend_100<T> = {
    (a: T): ascend_110<T>;
    (_a: PH, b: T): ascend_101<T>;
    (a: T, b: T): ascend_111;
};
type ascend_010<T> = {
    (fn: Morphism<T, Ordered>): ascend_110<T>;
    (_fn: PH, b: T): ascend_011<T>;
    (fn: Morphism<T, Ordered>, b: T): ascend_111;
};
type ascend_110<T> = {
    (b: T): ascend_111;
};
type ascend_001<T> = {
    (fn: Morphism<T, Ordered>): ascend_101<T>;
    (_fn: PH, a: T): ascend_011<T>;
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
