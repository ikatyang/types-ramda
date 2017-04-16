/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Calls an input function `n` times, returning an array containing the results of those function calls.
   *
   * `fn` is passed one argument: The current value of `n`, which begins at `0` and is gradually incremented to `n - 1`.
   */
  function times<R>(fn: Morphism<number, R>, n: number): R[];
  function times(_fn: PH, n: number): {
    <R>(fn: Morphism<number, R>): R[];
  };
  function times<R>(fn: Morphism<number, R>): {
    (n: number): R[];
  };
  function times<R>(fn: Morphism<number, R>, n: number): R[];

}
