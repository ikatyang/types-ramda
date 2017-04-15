/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Subtracts its second argument from its first argument.
   */
  function subtract(a: number, b: number): number;
  function subtract(_a: PH, b: number): {
    (a: number): number;
  };
  function subtract(a: number): {
    (b: number): number;
  };
  function subtract(a: number, b: number): number;

}
