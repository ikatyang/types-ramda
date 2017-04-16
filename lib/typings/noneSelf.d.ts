/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if no elements of the list match the predicate, `false` otherwise.
   *
   * Dispatches to the `any` method of the second argument, if present.
   */
  function noneSelf<T>(fn: Predicate<T>, noneAble: NoneAble<T>): boolean;
  function noneSelf<T>(_fn: PH, noneAble: NoneAble<T>): {
    (fn: Predicate<T>): boolean;
  };
  function noneSelf<T>(fn: Predicate<T>): {
    (noneAble: NoneAble<T>): boolean;
  };
  function noneSelf<T>(fn: Predicate<T>, noneAble: NoneAble<T>): boolean;

}
