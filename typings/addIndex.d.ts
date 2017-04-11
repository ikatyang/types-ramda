/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Creates a new list iteration function from an existing one by adding two new parameters to its callback function: the current index, and the entire list.
   *
   * This would turn, for instance, Ramda's simple `map` function into one that more closely resembles `Array.prototype.map`. Note that this will only work for functions in which the iteration callback function is the first parameter, and where the list is the last parameter. (This latter might be unimportant if the list parameter is not used.)
   */
  function addIndex<T, U>(mapper: ListMapper<T, U>, fn: IndexedMorphism<T, U>, list: List<T>): U[];
  function addIndex<T, U>(mapper: ListMapper<T, U>, fn: IndexedMorphism<T, U>, _list: Placeholder): CurriedFunction1<List<T>, U[]>;
  function addIndex<T, U>(mapper: ListMapper<T, U>, _fn: Placeholder, list: List<T>): CurriedFunction1<IndexedMorphism<T, U>, U[]>;
  function addIndex<T, U>(mapper: ListMapper<T, U>, _fn: Placeholder, _list: Placeholder): CurriedFunction2<IndexedMorphism<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, fn: IndexedMorphism<T, U>, list: List<T>): CurriedFunction1<ListMapper<T, U>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, fn: IndexedMorphism<T, U>, _list: Placeholder): CurriedFunction2<ListMapper<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, _fn: Placeholder, list: List<T>): CurriedFunction2<ListMapper<T, U>, IndexedMorphism<T, U>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, _fn: Placeholder, _list: Placeholder): CurriedFunction3<ListMapper<T, U>, IndexedMorphism<T, U>, List<T>, U[]>;
  function addIndex<T, U>(mapper: ListMapper<T, U>, fn: IndexedMorphism<T, U>): CurriedFunction1<List<T>, U[]>;
  function addIndex<T, U>(mapper: ListMapper<T, U>, _fn: Placeholder): CurriedFunction2<IndexedMorphism<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, fn: IndexedMorphism<T, U>): CurriedFunction2<ListMapper<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, _fn: Placeholder): CurriedFunction3<ListMapper<T, U>, IndexedMorphism<T, U>, List<T>, U[]>;
  function addIndex<T, U>(mapper: ListMapper<T, U>): CurriedFunction2<IndexedMorphism<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder): CurriedFunction3<ListMapper<T, U>, IndexedMorphism<T, U>, List<T>, U[]>;

}
