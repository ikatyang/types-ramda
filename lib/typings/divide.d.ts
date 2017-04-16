/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Divides two numbers. Equivalent to `a / b`.
   */
  function divide(a: number, b: number): number;
  function divide(_a: PH, b: number): {
    (a: number): number;
  };
  function divide(a: number): {
    (b: number): number;
  };
  function divide(a: number, b: number): number;

}
