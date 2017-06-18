export type Ordered = string | number | boolean | Date;
export type Property = string | number | symbol;
export type Path = List<Property>;

export type Constructor<T> = new (...args: any[]) => T;

export type Morphism<T, U> = (value: T) => U;
export type NestedMorphism<T, U, V> = (value: T) => (value: U) => V;
export type IndexedListMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
export type IndexedObjectMorphism<T, U, K extends string> = (value: T, index: number, object: Record<K, T>) => U;
export type KeyedObjectMorphism<T, U, K extends string> = (value: T, key: K, object: Record<K, T>) => U;

export type Tap<T> = (value: T) => void;
export type KeyedObjectTap<T, U extends Dictionary<T>> = (value: T, key: string, object: U) => void;

export type Predicate<T> = Morphism<T, boolean>;
export type Comparator<T, U extends number | boolean> = (a: T, b: T) => U;

export type Variadic<R> = (...args: any[]) => R;
export type TypedVariadic<T, R> = (...args: T[]) => R;

export type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
export type ObjectMapper<T, U, K extends string> = (fn: Morphism<T, U>, object: Record<K, T>) => Record<K, U>;

export interface KeyValuePair<K, V> extends ArrayLike<K | V> {
  0: K;
  1: V;
}

export interface ArrayLike<T> {
  readonly [index: number]: T;
  readonly length: number;
}
export type List<T> = T[] | ArrayLike<T>;
export type NestedList<T> = List<T | List<T>>;

export interface Dictionary<T> {
  [key: string]: T;
}
export interface NestedDictionary<T> {
  [key: string]: T | NestedDictionary<T>;
}

export interface Functor<T> {
  map<U>(fn: Morphism<T, U>): Functor<U>;
}

interface Apply<T> extends Functor<T> {
  apply<U>(fn: Apply<Morphism<T, U>>): Apply<U>;
}

interface Chain<T> extends Apply<T> {
  chain<U>(fn: Morphism<T, Chain<U>>): Chain<U>;
}

export interface Filterable<T> {
  filter(fn: Predicate<T>): Filterable<T>;
}
