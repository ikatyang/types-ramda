declare namespace R {

  /**
   * Performs left-to-right function composition. The leftmost function may have any arity; the remaining functions must be unary.
   *
   * In some libraries this function is named `sequence`.
   *
   * **Note:** The result of pipe is not automatically curried.
   */
  function pipe<T1, R1, R2>(fn1: (v1: T1) => R1, fn2: (r1: R1) => R2): (v1: T1) => R2;
  function pipe<T1, T2, R1, R2>(fn1: (v1: T1, v2: T2) => R1, fn2: (r1: R1) => R2): (v1: T1, v2: T2) => R2;
  function pipe<T1, T2, T3, R1, R2>(fn1: (v1: T1, v2: T2, v3: T3) => R1, fn2: (r1: R1) => R2): (v1: T1, v2: T2, v3: T3) => R2;
  function pipe<T1, T2, T3, T4, R1, R2>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4) => R1, fn2: (r1: R1) => R2): (v1: T1, v2: T2, v3: T3, v4: T4) => R2;
  function pipe<T1, T2, T3, T4, T5, R1, R2>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R1, fn2: (r1: R1) => R2): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R2;
  function pipe<T1, T2, T3, T4, T5, T6, R1, R2>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R1, fn2: (r1: R1) => R2): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R2;
  function pipe<R1, R2>(fn1: (...args: any[]) => R1, fn2: (r1: R1) => R2): (...args: any[]) => R2;
  function pipe<T1, R1, R2, R3>(fn1: (v1: T1) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3): (v1: T1) => R3;
  function pipe<T1, T2, R1, R2, R3>(fn1: (v1: T1, v2: T2) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3): (v1: T1, v2: T2) => R3;
  function pipe<T1, T2, T3, R1, R2, R3>(fn1: (v1: T1, v2: T2, v3: T3) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3): (v1: T1, v2: T2, v3: T3) => R3;
  function pipe<T1, T2, T3, T4, R1, R2, R3>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3): (v1: T1, v2: T2, v3: T3, v4: T4) => R3;
  function pipe<T1, T2, T3, T4, T5, R1, R2, R3>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R3;
  function pipe<T1, T2, T3, T4, T5, T6, R1, R2, R3>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R3;
  function pipe<R1, R2, R3>(fn1: (...args: any[]) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3): (...args: any[]) => R3;
  function pipe<T1, R1, R2, R3, R4>(fn1: (v1: T1) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4): (v1: T1) => R4;
  function pipe<T1, T2, R1, R2, R3, R4>(fn1: (v1: T1, v2: T2) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4): (v1: T1, v2: T2) => R4;
  function pipe<T1, T2, T3, R1, R2, R3, R4>(fn1: (v1: T1, v2: T2, v3: T3) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4): (v1: T1, v2: T2, v3: T3) => R4;
  function pipe<T1, T2, T3, T4, R1, R2, R3, R4>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4): (v1: T1, v2: T2, v3: T3, v4: T4) => R4;
  function pipe<T1, T2, T3, T4, T5, R1, R2, R3, R4>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R4;
  function pipe<T1, T2, T3, T4, T5, T6, R1, R2, R3, R4>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R4;
  function pipe<R1, R2, R3, R4>(fn1: (...args: any[]) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4): (...args: any[]) => R4;
  function pipe<T1, R1, R2, R3, R4, R5>(fn1: (v1: T1) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5): (v1: T1) => R5;
  function pipe<T1, T2, R1, R2, R3, R4, R5>(fn1: (v1: T1, v2: T2) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5): (v1: T1, v2: T2) => R5;
  function pipe<T1, T2, T3, R1, R2, R3, R4, R5>(fn1: (v1: T1, v2: T2, v3: T3) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5): (v1: T1, v2: T2, v3: T3) => R5;
  function pipe<T1, T2, T3, T4, R1, R2, R3, R4, R5>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5): (v1: T1, v2: T2, v3: T3, v4: T4) => R5;
  function pipe<T1, T2, T3, T4, T5, R1, R2, R3, R4, R5>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R5;
  function pipe<T1, T2, T3, T4, T5, T6, R1, R2, R3, R4, R5>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R5;
  function pipe<R1, R2, R3, R4, R5>(fn1: (...args: any[]) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5): (...args: any[]) => R5;
  function pipe<T1, R1, R2, R3, R4, R5, R6>(fn1: (v1: T1) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5, fn6: (r5: R5) => R6): (v1: T1) => R6;
  function pipe<T1, T2, R1, R2, R3, R4, R5, R6>(fn1: (v1: T1, v2: T2) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5, fn6: (r5: R5) => R6): (v1: T1, v2: T2) => R6;
  function pipe<T1, T2, T3, R1, R2, R3, R4, R5, R6>(fn1: (v1: T1, v2: T2, v3: T3) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5, fn6: (r5: R5) => R6): (v1: T1, v2: T2, v3: T3) => R6;
  function pipe<T1, T2, T3, T4, R1, R2, R3, R4, R5, R6>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5, fn6: (r5: R5) => R6): (v1: T1, v2: T2, v3: T3, v4: T4) => R6;
  function pipe<T1, T2, T3, T4, T5, R1, R2, R3, R4, R5, R6>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5, fn6: (r5: R5) => R6): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R6;
  function pipe<T1, T2, T3, T4, T5, T6, R1, R2, R3, R4, R5, R6>(fn1: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5, fn6: (r5: R5) => R6): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R6;
  function pipe<R1, R2, R3, R4, R5, R6>(fn1: (...args: any[]) => R1, fn2: (r1: R1) => R2, fn3: (r2: R2) => R3, fn4: (r3: R3) => R4, fn5: (r4: R4) => R5, fn6: (r5: R5) => R6): (...args: any[]) => R6;

}
