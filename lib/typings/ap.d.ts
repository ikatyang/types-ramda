/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * ap applies a list of functions to a list of values.
   *
   * Dispatches to the `ap` method of the second argument, if present. Also treats curried functions as applicatives.
   */
  function ap<T, U>(fns: List<Morphism<T, U>>, list: List<T>): U[];
  function ap<T>(_fns: PH, list: List<T>): {
    <U>(fns: List<Morphism<T, U>>): U[];
  };
  function ap<T, U>(fns: List<Morphism<T, U>>): {
    (list: List<T>): U[];
  };
  function ap<T, U>(fns: List<Morphism<T, U>>, list: List<T>): U[];

}
