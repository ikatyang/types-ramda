export type Morphism<T, U> = (value: T) => U;

export interface List<T> {
  readonly [index: number]: T;
  readonly length: number;
}

export interface Functor<T> {
  map<U>(fn: Morphism<T, U>): Functor<U>;
}
