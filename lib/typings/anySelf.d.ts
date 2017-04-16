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
  function anySelf<T>(fn: Predicate<T>, anyAble: AnyAble<T>): boolean;
  function anySelf<T>(_fn: PH, anyAble: AnyAble<T>): {
    (fn: Predicate<T>): boolean;
  };
  function anySelf<T>(fn: Predicate<T>): {
    (anyAble: AnyAble<T>): boolean;
  };
  function anySelf<T>(fn: Predicate<T>, anyAble: AnyAble<T>): boolean;

}
