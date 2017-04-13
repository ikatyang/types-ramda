/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * ap applies a list of functions to a list of values.
   *
   * Dispatches to the `ap` method of the second argument, if present. Also treats curried functions as applicatives.
   */
  function ap<T, U>(fns: List<Morphism<T, U>>, list: List<T>): List<U>;
  function ap<T, U>(_fns: Placeholder, list: List<T>): CurriedFunction1<List<Morphism<T, U>>, List<U>>;
  function ap<T, U>(fns: List<Morphism<T, U>>): CurriedFunction1<List<T>, List<U>>;
  function ap<T, U>(fns: List<Morphism<T, U>>, list: List<T>): List<U>;

  function ap<T, U>(fns: List<Morphism<T, U>>, appable: Appable<T>): Appable<U>;
  function ap<T, U>(_fns: Placeholder, appable: Appable<T>): CurriedFunction1<List<Morphism<T, U>>, Appable<U>>;
  function ap<T, U>(fns: List<Morphism<T, U>>): CurriedFunction1<Appable<T>, Appable<U>>;
  function ap<T, U>(fns: List<Morphism<T, U>>, appable: Appable<T>): Appable<U>;

}
