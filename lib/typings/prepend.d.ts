/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a new list with the given element at the front, followed by the contents of the list.
   */
  function prepend<T, U>(value: T, list: List<U>): (T | U)[];
  function prepend<U>(_value: PH, list: List<U>): {
    <T>(value: T): (T | U)[];
  };
  function prepend<T>(value: T): {
    <U>(list: List<U>): (T | U)[];
  };
  function prepend<T, U>(value: T, list: List<U>): (T | U)[];

}
