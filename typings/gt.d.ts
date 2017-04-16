/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if the first argument is greater than the second; `false` otherwise.
   */
  function gt<T extends Ordered>(a: T, b: T): boolean;
  function gt<T extends Ordered>(_a: PH, b: T): {
    (a: T): boolean;
  };
  function gt<T extends Ordered>(a: T): {
    (b: T): boolean;
  };
  function gt<T extends Ordered>(a: T, b: T): boolean;

}
