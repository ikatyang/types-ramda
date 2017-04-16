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
  function map<T>(_fn: PH, list: List<T>): {
    <U>(fn: Morphism<T, U>): U[];
  };
  function map<T, U>(fn: Morphism<T, U>): {
    (list: List<T>): U[];
    (dictionary: Dictionary<T>): Dictionary<U>;
    (mappable: Mappable<T>): Mappable<U>;
    (list: List<T>): U[];
  };
  function map<T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>): Dictionary<U>;
  function map<T>(_fn: PH, dictionary: Dictionary<T>): {
    <U>(fn: Morphism<T, U>): Dictionary<U>;
  };
  function map<T, U>(fn: Morphism<T, U>, mappable: Mappable<T>): Mappable<U>;
  function map<T>(_fn: PH, mappable: Mappable<T>): {
    <U>(fn: Morphism<T, U>): Mappable<U>;
  };
  function map<T, U>(fn: Morphism<T, U>, list: List<T>): U[];
  type MapList = {
    <T, U>(fn: Morphism<T, U>, list: List<T>): U[];
    <T>(_fn: PH, list: List<T>): {
      <U>(fn: Morphism<T, U>): U[];
    };
    <T, U>(fn: Morphism<T, U>): {
      (list: List<T>): U[];
    };
    <T, U>(fn: Morphism<T, U>, list: List<T>): U[];
  };
  type MapDictionary = {
    <T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>): Dictionary<U>;
    <T>(_fn: PH, dictionary: Dictionary<T>): {
      <U>(fn: Morphism<T, U>): Dictionary<U>;
    };
    <T, U>(fn: Morphism<T, U>): {
      (dictionary: Dictionary<T>): Dictionary<U>;
    };
    <T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>): Dictionary<U>;
  };
  type MapSelf = {
    <T, U>(fn: Morphism<T, U>, mappable: Mappable<T>): Mappable<U>;
    <T>(_fn: PH, mappable: Mappable<T>): {
      <U>(fn: Morphism<T, U>): Mappable<U>;
    };
    <T, U>(fn: Morphism<T, U>): {
      (mappable: Mappable<T>): Mappable<U>;
    };
    <T, U>(fn: Morphism<T, U>, mappable: Mappable<T>): Mappable<U>;
  };

}
