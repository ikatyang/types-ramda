/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * The complement of `filter`.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function rejectDictionary<T>(fn: Predicate<T>, dictionary: Dictionary<T>): Dictionary<T>;
  function rejectDictionary<T>(_fn: PH, dictionary: Dictionary<T>): {
    (fn: Predicate<T>): Dictionary<T>;
  };
  function rejectDictionary<T>(fn: Predicate<T>): {
    (dictionary: Dictionary<T>): Dictionary<T>;
  };
  function rejectDictionary<T>(fn: Predicate<T>, dictionary: Dictionary<T>): Dictionary<T>;

}
