import { Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const o: o_000;
type o_000 = {
    <T2, R>(a: Morphism<T2, R>): o_100<T2, R>;
    <T1, T2>(_a: PH, b: Morphism<T1, T2>): o_010<T1, T2>;
    <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>): o_110<T1, T2, R>;
    <T1>(_a: PH, _b: PH, value: T1): o_001<T1>;
    <T1, T2>(_a: PH, b: Morphism<T1, T2>, value: T1): o_011<T1, T2>;
    <T1, T2, R>(a: Morphism<T2, R>, _b: PH, value: T1): o_101<T1, T2, R>;
    <$SEL extends "1">(): <T2, R>(a: Morphism<T2, R>) => o_100<T2, R>;
    <$SEL extends "01">(): <T1, T2>(_a: PH, b: Morphism<T1, T2>) => o_010<T1, T2>;
    <$SEL extends "11">(): <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>) => o_110<T1, T2, R>;
    <$SEL extends "001">(): <T1>(_a: PH, _b: PH, value: T1) => o_001<T1>;
    <$SEL extends "011">(): <T1, T2>(_a: PH, b: Morphism<T1, T2>, value: T1) => o_011<T1, T2>;
    <$SEL extends "101">(): <T1, T2, R>(a: Morphism<T2, R>, _b: PH, value: T1) => o_101<T1, T2, R>;
    <$SEL extends "111">(): <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>, value: T1) => o_111<R>;
    <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>, value: T1): o_111<R>;
};
type o_100<T2, R> = {
    <T1>(b: Morphism<T1, T2>): o_110<T1, T2, R>;
    <T1>(_b: PH, value: T1): o_101<T1, T2, R>;
    <$SEL extends "1">(): <T1>(b: Morphism<T1, T2>) => o_110<T1, T2, R>;
    <$SEL extends "01">(): <T1>(_b: PH, value: T1) => o_101<T1, T2, R>;
    <$SEL extends "11">(): <T1>(b: Morphism<T1, T2>, value: T1) => o_111<R>;
    <T1>(b: Morphism<T1, T2>, value: T1): o_111<R>;
};
type o_010<T1, T2> = {
    <R>(a: Morphism<T2, R>): o_110<T1, T2, R>;
    (_a: PH, value: T1): o_011<T1, T2>;
    <$SEL extends "1">(): <R>(a: Morphism<T2, R>) => o_110<T1, T2, R>;
    <$SEL extends "01">(): (_a: PH, value: T1) => o_011<T1, T2>;
    <$SEL extends "11">(): <R>(a: Morphism<T2, R>, value: T1) => o_111<R>;
    <R>(a: Morphism<T2, R>, value: T1): o_111<R>;
};
type o_110<T1, T2, R> = {
    (value: T1): o_111<R>;
};
type o_001<T1> = {
    <T2, R>(a: Morphism<T2, R>): o_101<T1, T2, R>;
    <T2>(_a: PH, b: Morphism<T1, T2>): o_011<T1, T2>;
    <$SEL extends "1">(): <T2, R>(a: Morphism<T2, R>) => o_101<T1, T2, R>;
    <$SEL extends "01">(): <T2>(_a: PH, b: Morphism<T1, T2>) => o_011<T1, T2>;
    <$SEL extends "11">(): <T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>) => o_111<R>;
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
