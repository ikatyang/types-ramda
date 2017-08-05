import { Morphism, Ordered } from "./$types";
declare const ascend: ascend_000;
type ascend_000 = {
    <T>(fn: Morphism<T, Ordered>): ascend_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): ascend_110<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => ascend_100<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, a: T) => ascend_110<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, Ordered>, a: T, b: T) => ascend_111;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): ascend_111;
};
type ascend_100<T> = {
    (a: T): ascend_110<T>;
    <$SEL extends "1">(): (a: T) => ascend_110<T>;
    <$SEL extends "11">(): (a: T, b: T) => ascend_111;
    (a: T, b: T): ascend_111;
};
type ascend_010<T> = {
    (fn: Morphism<T, Ordered>): ascend_110<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => ascend_110<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, b: T) => ascend_111;
    (fn: Morphism<T, Ordered>, b: T): ascend_111;
};
type ascend_110<T> = {
    (b: T): ascend_111;
};
type ascend_001<T> = {
    (fn: Morphism<T, Ordered>): ascend_101<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => ascend_101<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, a: T) => ascend_111;
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
