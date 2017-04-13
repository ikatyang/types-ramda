/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Multiplies two numbers. Equivalent to `a * b` but curried.
   */
  function multiply(a: number, b: number): number;
  function multiply(_a: Placeholder, b: number): CurriedFunction1<number, number>;
  function multiply(a: number): CurriedFunction1<number, number>;
  function multiply(a: number, b: number): number;

}
