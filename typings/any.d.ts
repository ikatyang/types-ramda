/// <reference path="./internal/curried-functions.d.ts" />
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
    (anyAble: AnyAble<T>): boolean;
    (list: List<T>): boolean;
  };
  function any<T>(fn: Predicate<T>, anyAble: AnyAble<T>): boolean;
  function any<T>(_fn: PH, anyAble: AnyAble<T>): {
    (fn: Predicate<T>): boolean;
  };
  function any<T>(fn: Predicate<T>, list: List<T>): boolean;
  type AnyList = {
    <T>(fn: Predicate<T>, list: List<T>): boolean;
    <T>(_fn: PH, list: List<T>): {
      (fn: Predicate<T>): boolean;
    };
    <T>(fn: Predicate<T>): {
      (list: List<T>): boolean;
    };
    <T>(fn: Predicate<T>, list: List<T>): boolean;
  };
  type AnySelf = {
    <T>(fn: Predicate<T>, anyAble: AnyAble<T>): boolean;
    <T>(_fn: PH, anyAble: AnyAble<T>): {
      (fn: Predicate<T>): boolean;
    };
    <T>(fn: Predicate<T>): {
      (anyAble: AnyAble<T>): boolean;
    };
    <T>(fn: Predicate<T>, anyAble: AnyAble<T>): boolean;
  };

}
