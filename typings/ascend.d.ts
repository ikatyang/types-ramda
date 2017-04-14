/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Makes an ascending comparator function out of a function that returns a value that can be compared with `<` and `>`.
   */
  function ascend<T>(fn: Morphism<T, Ordered>, a: T, b: T): 0 | 1 | -1;
  function ascend<T>(fn: Morphism<T, Ordered>, _a: Placeholder, b: T): CurriedFunction1<T, 0 | 1 | -1>;
  function ascend<T>(_fn: Placeholder, a: T, b: T): CurriedFunction1<Morphism<T, Ordered>, 0 | 1 | -1>;
  function ascend<T>(_fn: Placeholder, _a: Placeholder, b: T): CurriedFunction2<Morphism<T, Ordered>, T, 0 | 1 | -1>;
  function ascend<T>(fn: Morphism<T, Ordered>, a: T): CurriedFunction1<T, 0 | 1 | -1>;
  function ascend<T>(_fn: Placeholder, a: T): CurriedFunction2<Morphism<T, Ordered>, T, 0 | 1 | -1>;
  function ascend<T>(fn: Morphism<T, Ordered>): CurriedFunction2<T, T, 0 | 1 | -1>;
  function ascend<T>(fn: Morphism<T, Ordered>, a: T, b: T): 0 | 1 | -1;

}
