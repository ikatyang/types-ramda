/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * The complement of `filter`.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function reject<T>(fn: Predicate<T>, list: List<T>): T[];
  function reject<T>(_fn: PH, list: List<T>): {
    (fn: Predicate<T>): T[];
  };
  function reject<T>(fn: Predicate<T>): {
    (list: List<T>): T[];
  };
  function reject<T>(fn: Predicate<T>, list: List<T>): T[];

}
