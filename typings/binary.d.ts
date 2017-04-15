/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Wraps a function of any arity (including nullary) in a function that accepts exactly 2 parameters. Any extraneous parameters will not be passed to the supplied function.
   */
  function binary<T, U, R>(fn: (a: T, b: U, ...args: any[]) => R): (a: T, b: U) => R;

}
