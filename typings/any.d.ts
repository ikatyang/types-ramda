/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if at least one of elements of the list match the predicate, `false` otherwise.
   *
   * Dispatches to the `any` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function any<T>(fn: Predicate<T>, list: List<T>): boolean;
  function any<T>(_fn: PH, list: List<T>): {
    (fn: Predicate<T>): boolean;
  };
  function any<T>(fn: Predicate<T>): {
    (list: List<T>): boolean;
  };
  function any<T>(fn: Predicate<T>, list: List<T>): boolean;

}
