/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Wraps a function of any arity (including nullary) in a function that accepts exactly 1 parameter. Any extraneous parameters will not be passed to the supplied function.
   */
  function unary<T, R>(fn: (a: T, ...args: any[]) => R): (a: T) => R;

}
