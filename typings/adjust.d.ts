/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Applies a function to the value at the given index of an array, returning a new copy of the array with the element at the given index replaced with the result of the function application.
   */
  function adjust<T, U>(fn: Morphism<T, U>, index: number, list: List<T>): (T | U)[];
  function adjust<T, U>(fn: Morphism<T, U>, index: number, _list: Placeholder): CurriedFunction1<List<T>, (T | U)[]>;
  function adjust<T, U>(fn: Morphism<T, U>, _index: Placeholder, list: List<T>): CurriedFunction1<number, (T | U)[]>;
  function adjust<T, U>(fn: Morphism<T, U>, _index: Placeholder, _list: Placeholder): CurriedFunction2<number, List<T>, (T | U)[]>;
  function adjust<T, U>(_fn: Placeholder, index: number, list: List<T>): CurriedFunction1<Morphism<T, U>, (T | U)[]>;
  function adjust<T, U>(_fn: Placeholder, index: number, _list: Placeholder): CurriedFunction2<Morphism<T, U>, List<T>, (T | U)[]>;
  function adjust<T, U>(_fn: Placeholder, _index: Placeholder, list: List<T>): CurriedFunction2<Morphism<T, U>, number, (T | U)[]>;
  function adjust<T, U>(_fn: Placeholder, _index: Placeholder, _list: Placeholder): CurriedFunction3<Morphism<T, U>, number, List<T>, (T | U)[]>;
  function adjust<T, U>(fn: Morphism<T, U>, index: number): CurriedFunction1<List<T>, (T | U)[]>;
  function adjust<T, U>(fn: Morphism<T, U>, _index: Placeholder): CurriedFunction2<number, List<T>, (T | U)[]>;
  function adjust<T, U>(_fn: Placeholder, index: number): CurriedFunction2<Morphism<T, U>, List<T>, (T | U)[]>;
  function adjust<T, U>(_fn: Placeholder, _index: Placeholder): CurriedFunction3<Morphism<T, U>, number, List<T>, (T | U)[]>;
  function adjust<T, U>(fn: Morphism<T, U>): CurriedFunction2<number, List<T>, (T | U)[]>;
  function adjust<T, U>(_fn: Placeholder): CurriedFunction3<Morphism<T, U>, number, List<T>, (T | U)[]>;
  function adjust<T, U>(): CurriedFunction3<Morphism<T, U>, number, List<T>, (T | U)[]>;

}
