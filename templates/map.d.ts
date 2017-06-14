import {Functor, List, Morphism} from './$types';

export function $list<T, U>(fn: Morphism<T, U>, list: List<T>): U[];
export function $functor<T, U>(fn: Morphism<T, U>, functor: Functor<T>): Functor<U>;
export function $object<T, U, K extends string>(fn: Morphism<T, U>, object: Record<K, T>): Record<K, U>;
