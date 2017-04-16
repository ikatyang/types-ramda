/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * ap applies a list of functions to a list of values.
   *
   * Dispatches to the `ap` method of the second argument, if present. Also treats curried functions as applicatives.
   */
  function apSelf<T, U>(fns: List<Morphism<T, U>>, appable: Appable<T>): Appable<U>;
  function apSelf<T>(_fns: PH, appable: Appable<T>): {
    <U>(fns: List<Morphism<T, U>>): Appable<U>;
  };
  function apSelf<T, U>(fns: List<Morphism<T, U>>): {
    (appable: Appable<T>): Appable<U>;
  };
  function apSelf<T, U>(fns: List<Morphism<T, U>>, appable: Appable<T>): Appable<U>;

}
