/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Returns `true` if one or both of its arguments are `true`. Returns `false` if both arguments are `false`.
   */
  function or<T, U>(a: T, b: U): T | U;
  function or<U>(_a: PH, b: U): {
    <T>(a: T): T | U;
  };
  function or<T>(a: T): {
    <U>(b: U): T | U;
  };
  function or<T, U>(a: T, b: U): T | U;

}
