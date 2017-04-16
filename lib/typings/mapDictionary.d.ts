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
  function mapDictionary<T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>): Dictionary<U>;
  function mapDictionary<T>(_fn: PH, dictionary: Dictionary<T>): {
    <U>(fn: Morphism<T, U>): Dictionary<U>;
  };
  function mapDictionary<T, U>(fn: Morphism<T, U>): {
    (dictionary: Dictionary<T>): Dictionary<U>;
  };
  function mapDictionary<T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>): Dictionary<U>;

}
