/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a new list containing the contents of the given list, followed by the given element.
   */
  function append<T, U>(value: T, list: List<U>): (T | U)[];
  function append<U>(_value: PH, list: List<U>): {
    <T>(value: T): (T | U)[];
  };
  function append<T>(value: T): {
    <U>(list: List<U>): (T | U)[];
  };
  function append<T, U>(value: T, list: List<U>): (T | U)[];

}
