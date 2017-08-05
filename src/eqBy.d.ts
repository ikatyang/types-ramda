import { Morphism } from "./$types";
declare const eqBy: eqBy_000;
type eqBy_000 = {
    <T>(fn: Morphism<T, any>): eqBy_100<T>;
    <T>(fn: Morphism<T, any>, a: T): eqBy_110<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, any>) => eqBy_100<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, any>, a: T) => eqBy_110<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, any>, a: T, b: T) => eqBy_111;
    <T>(fn: Morphism<T, any>, a: T, b: T): eqBy_111;
};
type eqBy_100<T> = {
    (a: T): eqBy_110<T>;
    <$SEL extends "1">(): (a: T) => eqBy_110<T>;
    <$SEL extends "11">(): (a: T, b: T) => eqBy_111;
    (a: T, b: T): eqBy_111;
};
type eqBy_010<T> = {
    (fn: Morphism<T, any>): eqBy_110<T>;
    <$SEL extends "1">(): (fn: Morphism<T, any>) => eqBy_110<T>;
    <$SEL extends "11">(): (fn: Morphism<T, any>, b: T) => eqBy_111;
    (fn: Morphism<T, any>, b: T): eqBy_111;
};
type eqBy_110<T> = {
    (b: T): eqBy_111;
};
type eqBy_001<T> = {
    (fn: Morphism<T, any>): eqBy_101<T>;
    <$SEL extends "1">(): (fn: Morphism<T, any>) => eqBy_101<T>;
    <$SEL extends "11">(): (fn: Morphism<T, any>, a: T) => eqBy_111;
    (fn: Morphism<T, any>, a: T): eqBy_111;
};
type eqBy_101<T> = {
    (a: T): eqBy_111;
};
type eqBy_011<T> = {
    (fn: Morphism<T, any>): eqBy_111;
};
type eqBy_111 = boolean;
export = eqBy;
