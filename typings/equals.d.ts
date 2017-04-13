/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Returns `true` if its arguments are equivalent, `false` otherwise. Handles cyclical data structures.
   *
   * Dispatches symmetrically to the `equals` methods of both arguments, if present.
   */
  function equals<T, U>(a: T, b: U): boolean;
  function equals<T, U>(_a: Placeholder, b: U): CurriedFunction1<T, boolean>;
  function equals<T, U>(a: T): CurriedFunction1<U, boolean>;
  function equals<T, U>(a: T, b: U): boolean;

}
