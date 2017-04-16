/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * mathMod behaves like the modulo operator should mathematically, unlike the `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2, mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN when the modulus is zero or negative.
   */
  function mathMod(a: number, b: number): number;
  function mathMod(_a: PH, b: number): {
    (a: number): number;
  };
  function mathMod(a: number): {
    (b: number): number;
  };
  function mathMod(a: number, b: number): number;

}
