import { Variadic } from "./$types";
declare const nAry: nAry_00;
type nAry_00 = {
    (n: 0): nAry_0arity_10;
    (n: 1): nAry_1arity_10;
    (n: 2): nAry_2arity_10;
    (n: 3): nAry_3arity_10;
    (n: 4): nAry_4arity_10;
    (n: 5): nAry_5arity_10;
    (n: 6): nAry_6arity_10;
    (n: number): nAry_variadic_10;
    <R>(n: 0, fn: (...args: any[]) => R): nAry_0arity_11<R>;
    <T1, R>(n: 1, fn: (v1: T1, ...args: any[]) => R): nAry_1arity_11<T1, R>;
    <T1, T2, R>(n: 2, fn: (v1: T1, v2: T2, ...args: any[]) => R): nAry_2arity_11<T1, T2, R>;
    <T1, T2, T3, R>(n: 3, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): nAry_3arity_11<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(n: 4, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): nAry_4arity_11<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(n: 5, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): nAry_5arity_11<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(n: 6, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): nAry_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "0arity">(): (n: 0) => nAry_0arity_10;
    <$SEL extends "1", $KIND extends "1arity">(): (n: 1) => nAry_1arity_10;
    <$SEL extends "1", $KIND extends "2arity">(): (n: 2) => nAry_2arity_10;
    <$SEL extends "1", $KIND extends "3arity">(): (n: 3) => nAry_3arity_10;
    <$SEL extends "1", $KIND extends "4arity">(): (n: 4) => nAry_4arity_10;
    <$SEL extends "1", $KIND extends "5arity">(): (n: 5) => nAry_5arity_10;
    <$SEL extends "1", $KIND extends "6arity">(): (n: 6) => nAry_6arity_10;
    <$SEL extends "1", $KIND extends "variadic">(): (n: number) => nAry_variadic_10;
    <$SEL extends "11", $KIND extends "0arity">(): <R>(n: 0, fn: (...args: any[]) => R) => nAry_0arity_11<R>;
    <$SEL extends "11", $KIND extends "1arity">(): <T1, R>(n: 1, fn: (v1: T1, ...args: any[]) => R) => nAry_1arity_11<T1, R>;
    <$SEL extends "11", $KIND extends "2arity">(): <T1, T2, R>(n: 2, fn: (v1: T1, v2: T2, ...args: any[]) => R) => nAry_2arity_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "3arity">(): <T1, T2, T3, R>(n: 3, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R) => nAry_3arity_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(n: 4, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R) => nAry_4arity_11<T1, T2, T3, T4, R>;
    <$SEL extends "11", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(n: 5, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R) => nAry_5arity_11<T1, T2, T3, T4, T5, R>;
    <$SEL extends "11", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(n: 6, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R) => nAry_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "variadic">(): <R>(n: number, fn: Variadic<R>) => nAry_variadic_11<R>;
    <R>(n: number, fn: Variadic<R>): nAry_variadic_11<R>;
};
type nAry_0arity_10 = {
    <R>(fn: (...args: any[]) => R): nAry_0arity_11<R>;
};
type nAry_1arity_10 = {
    <T1, R>(fn: (v1: T1, ...args: any[]) => R): nAry_1arity_11<T1, R>;
};
type nAry_2arity_10 = {
    <T1, T2, R>(fn: (v1: T1, v2: T2, ...args: any[]) => R): nAry_2arity_11<T1, T2, R>;
};
type nAry_3arity_10 = {
    <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): nAry_3arity_11<T1, T2, T3, R>;
};
type nAry_4arity_10 = {
    <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): nAry_4arity_11<T1, T2, T3, T4, R>;
};
type nAry_5arity_10 = {
    <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): nAry_5arity_11<T1, T2, T3, T4, T5, R>;
};
type nAry_6arity_10 = {
    <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): nAry_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type nAry_variadic_10 = {
    <R>(fn: Variadic<R>): nAry_variadic_11<R>;
};
type nAry_0arity_01<R> = {
    (n: 0): nAry_0arity_11<R>;
};
type nAry_1arity_01<T1, R> = {
    (n: 1): nAry_1arity_11<T1, R>;
};
type nAry_2arity_01<T1, T2, R> = {
    (n: 2): nAry_2arity_11<T1, T2, R>;
};
type nAry_3arity_01<T1, T2, T3, R> = {
    (n: 3): nAry_3arity_11<T1, T2, T3, R>;
};
type nAry_4arity_01<T1, T2, T3, T4, R> = {
    (n: 4): nAry_4arity_11<T1, T2, T3, T4, R>;
};
type nAry_5arity_01<T1, T2, T3, T4, T5, R> = {
    (n: 5): nAry_5arity_11<T1, T2, T3, T4, T5, R>;
};
type nAry_6arity_01<T1, T2, T3, T4, T5, T6, R> = {
    (n: 6): nAry_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type nAry_variadic_01<R> = {
    (n: number): nAry_variadic_11<R>;
};
type nAry_0arity_11<R> = () => R;
type nAry_1arity_11<T1, R> = (v1: T1) => R;
type nAry_2arity_11<T1, T2, R> = (v1: T1, v2: T2) => R;
type nAry_3arity_11<T1, T2, T3, R> = (v1: T1, v2: T2, v3: T3) => R;
type nAry_4arity_11<T1, T2, T3, T4, R> = (v1: T1, v2: T2, v3: T3, v4: T4) => R;
type nAry_5arity_11<T1, T2, T3, T4, T5, R> = (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R;
type nAry_6arity_11<T1, T2, T3, T4, T5, T6, R> = (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R;
type nAry_variadic_11<R> = Variadic<R>;
export = nAry;
