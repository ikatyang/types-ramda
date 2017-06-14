export type Morphism<T, U> = (value: T) => U;
export type IndexedListMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
export type IndexedObjectMorphism<T, U, K extends string> = (value: T, index: number, object: Record<K, T>) => U;
export type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
export type ObjectMapper<T, U, K extends string> = (fn: Morphism<T, U>, object: Record<K, T>) => Record<K, U>;
export interface List<T> {
    readonly [index: number]: T;
    readonly length: number;
}
export interface Functor<T> {
    map<U>(fn: Morphism<T, U>): Functor<U>;
}
