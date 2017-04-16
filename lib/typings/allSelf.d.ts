/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if all elements of the list match the predicate, `false` if there are any that don't.
   *
   * Dispatches to the `all` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function allSelf<T>(fn: Predicate<T>, allAble: AllAble<T>): boolean;
  function allSelf<T>(_fn: PH, allAble: AllAble<T>): {
    (fn: Predicate<T>): boolean;
  };
  function allSelf<T>(fn: Predicate<T>): {
    (allAble: AllAble<T>): boolean;
  };
  function allSelf<T>(fn: Predicate<T>, allAble: AllAble<T>): boolean;

}
