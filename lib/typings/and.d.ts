/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Returns `true` if both arguments are `true`; `false` otherwise.
   */
  function and<T, U>(a: T, b: U): T | U;
  function and<U>(_a: PH, b: U): {
    <T>(a: T): T | U;
  };
  function and<T>(a: T): {
    <U>(b: U): T | U;
  };
  function and<T, U>(a: T, b: U): T | U;

}
