/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Divides the first parameter by the second and returns the remainder. Note that this function preserves the JavaScript-style behavior for modulo. For mathematical modulo see `mathMod`.
   */
  function modulo(a: number, b: number): number;
  function modulo(_a: PH, b: number): {
    (a: number): number;
  };
  function modulo(a: number): {
    (b: number): number;
  };
  function modulo(a: number, b: number): number;

}
