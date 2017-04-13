declare namespace R {

  type Property = string | number | symbol;
  type Ordered = string | number | Date;

  type Morphism<T, U> = (value: T) => U;
  type IndexedMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
  type Predicate<T> = Morphism<T, boolean>;

  type Mapper<T, U> = (fn: Morphism<T, U>, mappable: Mappable<T>) => Mappable<U>;
  type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
  type DictionaryMapper<T, U> = (fn: Morphism<T, U>, dictionary: Dictionary<T>) => Dictionary<U>;

  interface Mappable<T> {
    map<U>(fn: Morphism<T, U>): Mappable<U>;
  }
  interface Filterable<T> {
    filter(fn: Predicate<T>): Filterable<T>;
  }
  interface Appable<T> {
    ap<U>(fn: Morphism<T, U>): Appable<U>;
  }
  interface Concatable<T> {
    concat(value: T): Concatable<T>;
  }

  interface List<T> {
    readonly length: number;
    readonly [index: number]: T;
  }
  interface Dictionary<T> {
    [key: string]: T;
  }

}
