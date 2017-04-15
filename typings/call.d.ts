/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns the result of calling its first argument with the remaining arguments. This is occasionally useful as a converging function for `R.converge`: the left branch can produce a function while the right branch produces a value to be passed to that function as an argument.
   */
  function call<R>(fn: (...args: any[]) => R, ...values: any[]): R;
  function call(_fn: PH, ...values: any[]): {
    <R>(fn: (...args: any[]) => R): R;
  };
  function call<R>(fn: (...args: any[]) => R): {
    (...values: any[]): R;
  };
  function call<R>(fn: (...args: any[]) => R, ...values: any[]): R;

}
