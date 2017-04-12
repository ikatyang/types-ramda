declare namespace R {

  type Morphism<T, U> = (value: T) => U;
  type IndexedMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
  type Predicate<T> = Morphism<T, boolean>;

  type Mapper<T, U> = ListMapper<T, U> | DictionaryMapper<T, U> | FunctorMapper<T, U>;
  type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
  type FunctorMapper<T, U> = (fn: Morphism<T, U>, functor: Functor<T>) => Functor<U>;
  type DictionaryMapper<T, U> = (fn: Morphism<T, U>, dictionary: Dictionary<T>) => Dictionary<U>;

  interface List<T> {
    readonly length: number;
    readonly [index: number]: T;
  }
  interface Functor<T> {
    map<U>(fn: Morphism<T, U>): Functor<U>;
  }
  interface Dictionary<T> {
    [key: string]: T;
  }

}
