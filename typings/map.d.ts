/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Takes a function and a [functor](https://github.com/fantasyland/fantasy-land#functor), applies the function to each of the functor's values, and returns a functor of the same shape.
   *
   * Ramda provides suitable `map` implementations for `Array` and `Object`, so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
   *
   * Dispatches to the `map` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * Also treats functions as functors and will compose them together.
   */
  function map<T, U>(fn: Morphism<T, U>, list: List<T>): U[];
  function map<T, U>(fn: Morphism<T, U>, _list: Placeholder): CurriedFunction1<List<T>, U[]>;
  function map<T, U>(_fn: Placeholder, list: List<T>): CurriedFunction1<Morphism<T, U>, U[]>;
  function map<T, U>(_fn: Placeholder, _list: Placeholder): CurriedFunction2<Morphism<T, U>, List<T>, U[]>;
  function map<T, U>(fn: Morphism<T, U>): CurriedFunction1<List<T>, U[]>;
  function map<T, U>(_fn: Placeholder): CurriedFunction2<Morphism<T, U>, List<T>, U[]>;
  function map<T, U>(): CurriedFunction2<Morphism<T, U>, List<T>, U[]>;

  function map<T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>): Dictionary<U>;
  function map<T, U>(fn: Morphism<T, U>, _dictionary: Placeholder): CurriedFunction1<Dictionary<T>, Dictionary<U>>;
  function map<T, U>(_fn: Placeholder, dictionary: Dictionary<T>): CurriedFunction1<Morphism<T, U>, Dictionary<U>>;
  function map<T, U>(_fn: Placeholder, _dictionary: Placeholder): CurriedFunction2<Morphism<T, U>, Dictionary<T>, Dictionary<U>>;
  function map<T, U>(fn: Morphism<T, U>): CurriedFunction1<Dictionary<T>, Dictionary<U>>;
  function map<T, U>(_fn: Placeholder): CurriedFunction2<Morphism<T, U>, Dictionary<T>, Dictionary<U>>;
  function map<T, U>(): CurriedFunction2<Morphism<T, U>, Dictionary<T>, Dictionary<U>>;

  function map<T, U>(fn: Morphism<T, U>, mappable: Mappable<T>): Mappable<U>;
  function map<T, U>(fn: Morphism<T, U>, _mappable: Placeholder): CurriedFunction1<Mappable<T>, Mappable<U>>;
  function map<T, U>(_fn: Placeholder, mappable: Mappable<T>): CurriedFunction1<Morphism<T, U>, Mappable<U>>;
  function map<T, U>(_fn: Placeholder, _mappable: Placeholder): CurriedFunction2<Morphism<T, U>, Mappable<T>, Mappable<U>>;
  function map<T, U>(fn: Morphism<T, U>): CurriedFunction1<Mappable<T>, Mappable<U>>;
  function map<T, U>(_fn: Placeholder): CurriedFunction2<Morphism<T, U>, Mappable<T>, Mappable<U>>;
  function map<T, U>(): CurriedFunction2<Morphism<T, U>, Mappable<T>, Mappable<U>>;

}
