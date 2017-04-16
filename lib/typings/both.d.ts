/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * A function which calls the two provided functions and returns the `&&` of the results. It returns the result of the first function if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning that the second function will not be invoked if the first returns a false-y value.
   *
   * In addition to functions, `R.both` also accepts any fantasy-land compatible applicative functor.
   */
  function both<T>(a: Predicate<T>, b: Predicate<T>): Predicate<T>;
  function both<T>(_a: PH, b: Predicate<T>): {
    (a: Predicate<T>): Predicate<T>;
  };
  function both<T>(a: Predicate<T>): {
    (b: Predicate<T>): Predicate<T>;
  };
  function both<T>(a: Predicate<T>, b: Predicate<T>): Predicate<T>;

}
