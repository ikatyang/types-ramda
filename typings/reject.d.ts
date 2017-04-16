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
    (dictionary: Dictionary<T>): Dictionary<T>;
    (filterable: Filterable<T>): Filterable<T>;
  };
  function reject<T>(fn: Predicate<T>, dictionary: Dictionary<T>): Dictionary<T>;
  function reject<T>(_fn: PH, dictionary: Dictionary<T>): {
    (fn: Predicate<T>): Dictionary<T>;
  };
  function reject<T>(fn: Predicate<T>, filterable: Filterable<T>): Filterable<T>;
  function reject<T>(_fn: PH, filterable: Filterable<T>): {
    (fn: Predicate<T>): Filterable<T>;
  };
  function reject<T>(fn: Predicate<T>, list: List<T>): T[];
  type RejectList = {
    <T>(fn: Predicate<T>, list: List<T>): T[];
    <T>(_fn: PH, list: List<T>): {
      (fn: Predicate<T>): T[];
    };
    <T>(fn: Predicate<T>): {
      (list: List<T>): T[];
    };
  };
  type RejectDictionary = {
    <T>(fn: Predicate<T>, dictionary: Dictionary<T>): Dictionary<T>;
    <T>(_fn: PH, dictionary: Dictionary<T>): {
      (fn: Predicate<T>): Dictionary<T>;
    };
    <T>(fn: Predicate<T>): {
      (dictionary: Dictionary<T>): Dictionary<T>;
    };
  };
  type RejectSelf = {
    <T>(fn: Predicate<T>, filterable: Filterable<T>): Filterable<T>;
    <T>(_fn: PH, filterable: Filterable<T>): {
      (fn: Predicate<T>): Filterable<T>;
    };
    <T>(fn: Predicate<T>): {
      (filterable: Filterable<T>): Filterable<T>;
    };
  };

}
