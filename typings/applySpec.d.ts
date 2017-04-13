/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Given a spec object recursively mapping properties to functions, creates afunction producing an object of the same structure, by mapping each property to the result of calling its associated function with the supplied arguments.
   */
  function applySpec<N extends 1, T1 = any, R = any>(fns: NestedDictionary<(v1: T1) => R>): CurriedFunction1<T1, NestedDictionary<R>>;
  function applySpec<N extends 2, T1 = any, T2 = any, R = any>(fns: NestedDictionary<(v1: T1, v2: T2) => R>): CurriedFunction2<T1, T2, NestedDictionary<R>>;
  function applySpec<N extends 3, T1 = any, T2 = any, T3 = any, R = any>(fns: NestedDictionary<(v1: T1, v2: T2, v3: T3) => R>): CurriedFunction3<T1, T2, T3, NestedDictionary<R>>;
  function applySpec<N extends 4, T1 = any, T2 = any, T3 = any, T4 = any, R = any>(fns: NestedDictionary<(v1: T1, v2: T2, v3: T3, v4: T4) => R>): CurriedFunction4<T1, T2, T3, T4, NestedDictionary<R>>;
  function applySpec<N extends 5, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, R = any>(fns: NestedDictionary<(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R>): CurriedFunction5<T1, T2, T3, T4, T5, NestedDictionary<R>>;
  function applySpec<N extends 6, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, R = any>(fns: NestedDictionary<(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R>): CurriedFunction6<T1, T2, T3, T4, T5, T6, NestedDictionary<R>>;

}
