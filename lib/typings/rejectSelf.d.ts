/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * The complement of `filter`.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function rejectSelf<T>(fn: Predicate<T>, filterable: Filterable<T>): Filterable<T>;
  function rejectSelf<T>(_fn: PH, filterable: Filterable<T>): {
    (fn: Predicate<T>): Filterable<T>;
  };
  function rejectSelf<T>(fn: Predicate<T>): {
    (filterable: Filterable<T>): Filterable<T>;
  };
  function rejectSelf<T>(fn: Predicate<T>, filterable: Filterable<T>): Filterable<T>;

}
