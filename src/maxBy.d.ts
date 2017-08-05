import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const maxBy: maxBy_000;
type maxBy_000 = {
    <T>(fn: Morphism<T, Ordered>): maxBy_100<T>;
    <T>(_fn: PH, a: T): maxBy_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): maxBy_110<T>;
    <T>(_fn: PH, _a: PH, b: T): maxBy_001<T>;
    <T>(_fn: PH, a: T, b: T): maxBy_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): maxBy_101<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): maxBy_111<T>;
};
type maxBy_100<T> = {
    (a: T): maxBy_110<T>;
    (_a: PH, b: T): maxBy_101<T>;
    (a: T, b: T): maxBy_111<T>;
};
type maxBy_010<T> = {
    (fn: Morphism<T, Ordered>): maxBy_110<T>;
    (_fn: PH, b: T): maxBy_011<T>;
    (fn: Morphism<T, Ordered>, b: T): maxBy_111<T>;
};
type maxBy_110<T> = {
    (b: T): maxBy_111<T>;
};
type maxBy_001<T> = {
    (fn: Morphism<T, Ordered>): maxBy_101<T>;
    (_fn: PH, a: T): maxBy_011<T>;
    (fn: Morphism<T, Ordered>, a: T): maxBy_111<T>;
};
type maxBy_101<T> = {
    (a: T): maxBy_111<T>;
};
type maxBy_011<T> = {
    (fn: Morphism<T, Ordered>): maxBy_111<T>;
};
type maxBy_111<T> = T;
export = maxBy;
