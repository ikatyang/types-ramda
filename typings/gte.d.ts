/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if the first argument is greater than or equal to the second; `false` otherwise.
   */
  function gte<T extends Ordered>(a: T, b: T): boolean;
  function gte<T extends Ordered>(_a: PH, b: T): {
    (a: T): boolean;
  };
  function gte<T extends Ordered>(a: T): {
    (b: T): boolean;
  };
  function gte<T extends Ordered>(a: T, b: T): boolean;

}
