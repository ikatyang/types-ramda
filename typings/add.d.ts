/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Adds two values.
   */
  function add(a: number, b: number): number;
  function add(_a: Placeholder, b: number): CurriedFunction1<number, number>;
  function add(a: number): CurriedFunction1<number, number>;
  function add(a: number, b: number): number;

}
