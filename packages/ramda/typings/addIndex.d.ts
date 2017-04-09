/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Creates a new list iteration function from an existing one by adding two new parameters to its callback function: the current index, and the entire list.
   * 
   * This would turn, for instance, Ramda's simple `map` function into one that more closely resembles `Array.prototype.map`. Note that this will only work for functions in which the iteration callback function is the first parameter, and where the list is the last parameter. (This latter might be unimportant if the list parameter is not used.)
   */
  function addIndex<T, U>(mapper: Mapper<T, U>, transformer: IndexedTransformer<T, U>, list: List<T>): U[];
  function addIndex<T, U>(mapper: Mapper<T, U>, transformer: IndexedTransformer<T, U>, _list: Placeholder): CurriedFunction1<List<T>, U[]>;
  function addIndex<T, U>(mapper: Mapper<T, U>, _transformer: Placeholder, list: List<T>): CurriedFunction1<IndexedTransformer<T, U>, U[]>;
  function addIndex<T, U>(mapper: Mapper<T, U>, _transformer: Placeholder, _list: Placeholder): CurriedFunction2<IndexedTransformer<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, transformer: IndexedTransformer<T, U>, list: List<T>): CurriedFunction1<Mapper<T, U>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, transformer: IndexedTransformer<T, U>, _list: Placeholder): CurriedFunction2<Mapper<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, _transformer: Placeholder, list: List<T>): CurriedFunction2<Mapper<T, U>, IndexedTransformer<T, U>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, _transformer: Placeholder, _list: Placeholder): CurriedFunction3<Mapper<T, U>, IndexedTransformer<T, U>, List<T>, U[]>;
  function addIndex<T, U>(mapper: Mapper<T, U>, transformer: IndexedTransformer<T, U>): CurriedFunction1<List<T>, U[]>;
  function addIndex<T, U>(mapper: Mapper<T, U>, _transformer: Placeholder): CurriedFunction2<IndexedTransformer<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, transformer: IndexedTransformer<T, U>): CurriedFunction2<Mapper<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder, _transformer: Placeholder): CurriedFunction3<Mapper<T, U>, IndexedTransformer<T, U>, List<T>, U[]>;
  function addIndex<T, U>(mapper: Mapper<T, U>): CurriedFunction2<IndexedTransformer<T, U>, List<T>, U[]>;
  function addIndex<T, U>(_mapper: Placeholder): CurriedFunction3<Mapper<T, U>, IndexedTransformer<T, U>, List<T>, U[]>;

}
