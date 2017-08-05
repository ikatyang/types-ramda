import { Morphism, Ordered } from "./$types";
declare const maxBy: maxBy_000;
type maxBy_000 = {
    <T>(fn: Morphism<T, Ordered>): maxBy_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): maxBy_110<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): maxBy_111<T>;
};
type maxBy_100<T> = {
    (a: T): maxBy_110<T>;
    (a: T, b: T): maxBy_111<T>;
};
type maxBy_010<T> = {
    (fn: Morphism<T, Ordered>): maxBy_110<T>;
    (fn: Morphism<T, Ordered>, b: T): maxBy_111<T>;
};
type maxBy_110<T> = {
    (b: T): maxBy_111<T>;
};
type maxBy_001<T> = {
    (fn: Morphism<T, Ordered>): maxBy_101<T>;
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
