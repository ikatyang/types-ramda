/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Takes a predicate and a "filterable", and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate.
   *
   * Dispatches to the `filter` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function filterSelf<T>(fn: Predicate<T>, filterable: Filterable<T>): Filterable<T>;
  function filterSelf<T>(_fn: PH, filterable: Filterable<T>): {
    (fn: Predicate<T>): Filterable<T>;
  };
  function filterSelf<T>(fn: Predicate<T>): {
    (filterable: Filterable<T>): Filterable<T>;
  };
  function filterSelf<T>(fn: Predicate<T>, filterable: Filterable<T>): Filterable<T>;

}
