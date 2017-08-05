import { Morphism } from "./$types";
declare const o: o_000;
type o_000 = {
    <T2, R>(a: Morphism<T2, R>): o_100<T2, R>;
    <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>): o_110<T1, T2, R>;
    <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>, value: T1): o_111<R>;
};
type o_100<T2, R> = {
    <T1>(b: Morphism<T1, T2>): o_110<T1, T2, R>;
    <T1>(b: Morphism<T1, T2>, value: T1): o_111<R>;
};
type o_010<T1, T2> = {
    <R>(a: Morphism<T2, R>): o_110<T1, T2, R>;
    <R>(a: Morphism<T2, R>, value: T1): o_111<R>;
};
type o_110<T1, T2, R> = {
    (value: T1): o_111<R>;
};
type o_001<T1> = {
    <T2, R>(a: Morphism<T2, R>): o_101<T1, T2, R>;
    <T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>): o_111<R>;
};
type o_101<T1, T2, R> = {
    (b: Morphism<T1, T2>): o_111<R>;
};
type o_011<T1, T2> = {
    <R>(a: Morphism<T2, R>): o_111<R>;
};
type o_111<R> = R;
export = o;
