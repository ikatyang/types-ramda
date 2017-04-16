/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.
   */
  function identity<T>(value: T): T;

}
