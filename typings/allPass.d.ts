/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Takes a list of predicates and returns a predicate that returns true for a given list of arguments if every one of the provided predicates is satisfied by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the highest-arity predicate.
   */
  function allPass<T>(fns: Predicate<T>[]): CurriedFunction1<T, boolean>;
  function allPass<T>(_fns: Placeholder): CurriedFunction1<Predicate<T>[], CurriedFunction1<T, boolean>>;
  function allPass<T>(): CurriedFunction1<Predicate<T>[], CurriedFunction1<T, boolean>>;
  function allPass<T>(fns: Predicate<T>[]): CurriedFunction1<T, boolean>;

}
