/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Returns `true` if both arguments are `true`; `false` otherwise.
   */
  function and(a: boolean, b: boolean): boolean;
  function and(_a: Placeholder, b: boolean): CurriedFunction1<boolean, boolean>;
  function and(a: boolean): CurriedFunction1<boolean, boolean>;
  function and(a: boolean, b: boolean): boolean;

}
