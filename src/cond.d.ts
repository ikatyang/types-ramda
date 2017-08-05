declare const cond: cond_0;
type cond_0 = {
    <T1, R>(fns: [(v1: T1) => boolean, (v1: T1) => R][]): cond_1arity_1<T1, R>;
    <T1, T2, R>(fns: [(v1: T1, v2: T2) => boolean, (v1: T1, v2: T2) => R][]): cond_2arity_1<T1, T2, R>;
    <T1, T2, T3, R>(fns: [(v1: T1, v2: T2, v3: T3) => boolean, (v1: T1, v2: T2, v3: T3) => R][]): cond_3arity_1<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(fns: [(v1: T1, v2: T2, v3: T3, v4: T4) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4) => R][]): cond_4arity_1<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(fns: [(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R][]): cond_5arity_1<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(fns: [(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => boolean, (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R][]): cond_6arity_1<T1, T2, T3, T4, T5, T6, R>;
};
type cond_1arity_1<T1, R> = (v1: T1) => R;
type cond_2arity_1<T1, T2, R> = (v1: T1, v2: T2) => R;
type cond_3arity_1<T1, T2, T3, R> = (v1: T1, v2: T2, v3: T3) => R;
type cond_4arity_1<T1, T2, T3, T4, R> = (v1: T1, v2: T2, v3: T3, v4: T4) => R;
type cond_5arity_1<T1, T2, T3, T4, T5, R> = (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R;
type cond_6arity_1<T1, T2, T3, T4, T5, T6, R> = (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R;
export = cond;
