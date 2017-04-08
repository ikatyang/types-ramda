/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {
  /**
   * `(a: number, b: numer): number`
   *
   * Adds two values.
   */
  const add: CurriedFunction2<number, number, number>;
}
