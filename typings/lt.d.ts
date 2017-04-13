/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if the first argument is less than the second; `false` otherwise.
   */
  function lt(a: Ordered, b: Ordered): boolean;
  function lt(_a: Placeholder, b: Ordered): CurriedFunction1<Ordered, boolean>;
  function lt(a: Ordered): CurriedFunction1<Ordered, boolean>;
  function lt(a: Ordered, b: Ordered): boolean;

}
