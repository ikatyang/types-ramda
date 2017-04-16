/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Accepts a converging function and a list of branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.
   */
  function converge<R, T1>(fn: (...args: any[]) => R, fns: ((v1: T1) => any)[]): CurriedFunction1<T1, R>;
  function converge<T1>(_fn: PH, fns: ((v1: T1) => any)[]): {
    <R>(fn: (...args: any[]) => R): CurriedFunction1<T1, R>;
  };
  function converge<R>(fn: (...args: any[]) => R): {
    <T1>(fns: ((v1: T1) => any)[]): CurriedFunction1<T1, R>;
  };
  function converge<R, T1>(fn: (...args: any[]) => R, fns: ((v1: T1) => any)[]): CurriedFunction1<T1, R>;
  type Converge1 = {
    <R, T1>(fn: (...args: any[]) => R, fns: ((v1: T1) => any)[]): CurriedFunction1<T1, R>;
    <T1>(_fn: PH, fns: ((v1: T1) => any)[]): {
      <R>(fn: (...args: any[]) => R): CurriedFunction1<T1, R>;
    };
    <R>(fn: (...args: any[]) => R): {
      <T1>(fns: ((v1: T1) => any)[]): CurriedFunction1<T1, R>;
    };
  };
  function converge<R, T1, T2>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2) => any)[]): CurriedFunction2<T1, T2, R>;
  function converge<T1, T2>(_fn: PH, fns: ((v1: T1, v2: T2) => any)[]): {
    <R>(fn: (...args: any[]) => R): CurriedFunction2<T1, T2, R>;
  };
  function converge<R>(fn: (...args: any[]) => R): {
    <T1, T2>(fns: ((v1: T1, v2: T2) => any)[]): CurriedFunction2<T1, T2, R>;
  };
  function converge<R, T1, T2>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2) => any)[]): CurriedFunction2<T1, T2, R>;
  type Converge2 = {
    <R, T1, T2>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2) => any)[]): CurriedFunction2<T1, T2, R>;
    <T1, T2>(_fn: PH, fns: ((v1: T1, v2: T2) => any)[]): {
      <R>(fn: (...args: any[]) => R): CurriedFunction2<T1, T2, R>;
    };
    <R>(fn: (...args: any[]) => R): {
      <T1, T2>(fns: ((v1: T1, v2: T2) => any)[]): CurriedFunction2<T1, T2, R>;
    };
  };
  function converge<R, T1, T2, T3>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3) => any)[]): CurriedFunction3<T1, T2, T3, R>;
  function converge<T1, T2, T3>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3) => any)[]): {
    <R>(fn: (...args: any[]) => R): CurriedFunction3<T1, T2, T3, R>;
  };
  function converge<R>(fn: (...args: any[]) => R): {
    <T1, T2, T3>(fns: ((v1: T1, v2: T2, v3: T3) => any)[]): CurriedFunction3<T1, T2, T3, R>;
  };
  function converge<R, T1, T2, T3>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3) => any)[]): CurriedFunction3<T1, T2, T3, R>;
  type Converge3 = {
    <R, T1, T2, T3>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3) => any)[]): CurriedFunction3<T1, T2, T3, R>;
    <T1, T2, T3>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3) => any)[]): {
      <R>(fn: (...args: any[]) => R): CurriedFunction3<T1, T2, T3, R>;
    };
    <R>(fn: (...args: any[]) => R): {
      <T1, T2, T3>(fns: ((v1: T1, v2: T2, v3: T3) => any)[]): CurriedFunction3<T1, T2, T3, R>;
    };
  };
  function converge<R, T1, T2, T3, T4>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4) => any)[]): CurriedFunction4<T1, T2, T3, T4, R>;
  function converge<T1, T2, T3, T4>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3, v4: T4) => any)[]): {
    <R>(fn: (...args: any[]) => R): CurriedFunction4<T1, T2, T3, T4, R>;
  };
  function converge<R>(fn: (...args: any[]) => R): {
    <T1, T2, T3, T4>(fns: ((v1: T1, v2: T2, v3: T3, v4: T4) => any)[]): CurriedFunction4<T1, T2, T3, T4, R>;
  };
  function converge<R, T1, T2, T3, T4>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4) => any)[]): CurriedFunction4<T1, T2, T3, T4, R>;
  type Converge4 = {
    <R, T1, T2, T3, T4>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4) => any)[]): CurriedFunction4<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3, v4: T4) => any)[]): {
      <R>(fn: (...args: any[]) => R): CurriedFunction4<T1, T2, T3, T4, R>;
    };
    <R>(fn: (...args: any[]) => R): {
      <T1, T2, T3, T4>(fns: ((v1: T1, v2: T2, v3: T3, v4: T4) => any)[]): CurriedFunction4<T1, T2, T3, T4, R>;
    };
  };
  function converge<R, T1, T2, T3, T4, T5>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => any)[]): CurriedFunction5<T1, T2, T3, T4, T5, R>;
  function converge<T1, T2, T3, T4, T5>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => any)[]): {
    <R>(fn: (...args: any[]) => R): CurriedFunction5<T1, T2, T3, T4, T5, R>;
  };
  function converge<R>(fn: (...args: any[]) => R): {
    <T1, T2, T3, T4, T5>(fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => any)[]): CurriedFunction5<T1, T2, T3, T4, T5, R>;
  };
  function converge<R, T1, T2, T3, T4, T5>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => any)[]): CurriedFunction5<T1, T2, T3, T4, T5, R>;
  type Converge5 = {
    <R, T1, T2, T3, T4, T5>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => any)[]): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => any)[]): {
      <R>(fn: (...args: any[]) => R): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    };
    <R>(fn: (...args: any[]) => R): {
      <T1, T2, T3, T4, T5>(fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => any)[]): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    };
  };
  function converge<R, T1, T2, T3, T4, T5, T6>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => any)[]): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
  function converge<T1, T2, T3, T4, T5, T6>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => any)[]): {
    <R>(fn: (...args: any[]) => R): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
  };
  function converge<R>(fn: (...args: any[]) => R): {
    <T1, T2, T3, T4, T5, T6>(fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => any)[]): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
  };
  function converge<R, T1, T2, T3, T4, T5, T6>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => any)[]): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
  type Converge6 = {
    <R, T1, T2, T3, T4, T5, T6>(fn: (...args: any[]) => R, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => any)[]): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
    <T1, T2, T3, T4, T5, T6>(_fn: PH, fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => any)[]): {
      <R>(fn: (...args: any[]) => R): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
    };
    <R>(fn: (...args: any[]) => R): {
      <T1, T2, T3, T4, T5, T6>(fns: ((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => any)[]): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
    };
  };

}
