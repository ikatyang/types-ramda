/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Returns `true` if all elements of the list match the predicate, `false` if there are any that don't.
   *
   * Dispatches to the `all` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function all<T>(fn: Predicate<T>, list: List<T>): boolean;
  function all<T>(fn: Predicate<T>, _list: Placeholder): CurriedFunction1<List<T>, boolean>;
  function all<T>(_fn: Placeholder, list: List<T>): CurriedFunction1<Predicate<T>, boolean>;
  function all<T>(_fn: Placeholder, _list: Placeholder): CurriedFunction2<Predicate<T>, List<T>, boolean>;
  function all<T>(fn: Predicate<T>): CurriedFunction1<List<T>, boolean>;
  function all<T>(_fn: Placeholder): CurriedFunction2<Predicate<T>, List<T>, boolean>;
  function all<T>(): CurriedFunction2<Predicate<T>, List<T>, boolean>;
  function all<T>(fn: Predicate<T>, list: List<T>): boolean;

}
