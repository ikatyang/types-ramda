/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Takes a list of predicates and returns a predicate that returns true for a given list of arguments if at least one of the provided predicates is satisfied by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the highest-arity predicate.
   */
  function anyPass<T>(fns: Predicate<T>[]): CurriedFunction1<T, boolean>;
  function anyPass<T>(_fns: Placeholder): CurriedFunction1<Predicate<T>[], CurriedFunction1<T, boolean>>;
  function anyPass<T>(): CurriedFunction1<Predicate<T>[], CurriedFunction1<T, boolean>>;
  function anyPass<T>(fns: Predicate<T>[]): CurriedFunction1<T, boolean>;

}
