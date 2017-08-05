import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const minBy: minBy_000;
type minBy_000 = {
    <T>(fn: Morphism<T, Ordered>): minBy_100<T>;
    <T>(_fn: PH, a: T): minBy_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): minBy_110<T>;
    <T>(_fn: PH, _a: PH, b: T): minBy_001<T>;
    <T>(_fn: PH, a: T, b: T): minBy_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): minBy_101<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): minBy_111<T>;
};
type minBy_100<T> = {
    (a: T): minBy_110<T>;
    (_a: PH, b: T): minBy_101<T>;
    (a: T, b: T): minBy_111<T>;
};
type minBy_010<T> = {
    (fn: Morphism<T, Ordered>): minBy_110<T>;
    (_fn: PH, b: T): minBy_011<T>;
    (fn: Morphism<T, Ordered>, b: T): minBy_111<T>;
};
type minBy_110<T> = {
    (b: T): minBy_111<T>;
};
type minBy_001<T> = {
    (fn: Morphism<T, Ordered>): minBy_101<T>;
    (_fn: PH, a: T): minBy_011<T>;
    (fn: Morphism<T, Ordered>, a: T): minBy_111<T>;
};
type minBy_101<T> = {
    (a: T): minBy_111<T>;
};
type minBy_011<T> = {
    (fn: Morphism<T, Ordered>): minBy_111<T>;
};
type minBy_111<T> = T;
export = minBy;
