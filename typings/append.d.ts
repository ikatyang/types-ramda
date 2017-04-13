/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns a new list containing the contents of the given list, followed by the given element.
   */
  function append<T, U>(value: T, list: List<U>): (T | U)[];
  function append<T, U>(_value: Placeholder, list: List<U>): CurriedFunction1<T, (T | U)[]>;
  function append<T, U>(value: T): CurriedFunction1<List<U>, (T | U)[]>;
  function append<T, U>(value: T, list: List<U>): (T | U)[];

}
