/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Applies function `fn` to the argument list `args`. This is useful for creating a fixed-arity function from a variadic function. `fn` should be a bound function if context is significant.
   */
  function apply<R>(fn: (...args: any[]) => R, values: List<any>): R;
  function apply(_fn: PH, values: List<any>): {
    <R>(fn: (...args: any[]) => R): R;
  };
  function apply<R>(fn: (...args: any[]) => R): {
    (values: List<any>): R;
  };
  function apply<R>(fn: (...args: any[]) => R, values: List<any>): R;

}
