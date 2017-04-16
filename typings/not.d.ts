/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * A function that returns the `!` of its argument. It will return `true` when passed false-y value, and `false` when passed a truth-y one.
   */
  function not(value: any): boolean;

}
