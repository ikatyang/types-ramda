export type Ordered = string | number | boolean | Date;
export type Property = string | number | symbol;
export type Path = List<Property>;

export type Morphism<T, U> = (value: T) => U;
export type IndexedListMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
export type IndexedObjectMorphism<T, U, K extends string> = (value: T, index: number, object: Record<K, T>) => U;

export type Tap<T> = (value: T) => void;
export type Predicate<T> = Morphism<T, boolean>;
export type Variadic<T> = (...args: any[]) => T;
export type Comparator<T, U extends number | boolean> = (a: T, b: T) => U;

export type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
export type ObjectMapper<T, U, K extends string> = (fn: Morphism<T, U>, object: Record<K, T>) => Record<K, U>;

export interface List<T> {
  readonly [index: number]: T;
  readonly length: number;
}
export interface NestedList<T> {
  readonly [index: number]: T | List<T>;
  readonly length: number;
}

export interface Dictionary<T> {
  [key: string]: T;
}
export interface NestedDictionary<T> {
  [key: string]: T | NestedDictionary<T>;
}

export interface Functor<T> {
  map<U>(fn: Morphism<T, U>): Functor<U>;
}

export interface Filterable<T> {
  filter(fn: Predicate<T>): Filterable<T>;
}
