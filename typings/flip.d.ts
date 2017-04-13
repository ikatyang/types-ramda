/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a new function much like the supplied one, except that the first two arguments' order is reversed.
   */
  function flip<T1, T2, R>(fn: (v1: T1, v2: T2) => R): CurriedFunction2<T2, T1, R>;
  function flip<T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R): CurriedFunction3<T2, T1, T3, R>;
  function flip<T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R): CurriedFunction4<T2, T1, T3, T4, R>;
  function flip<T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R): CurriedFunction5<T2, T1, T3, T4, T5, R>;
  function flip<T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): CurriedFunction6<T2, T1, T3, T4, T5, T6, R>;

}
