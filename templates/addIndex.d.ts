import {CurriedFunction2} from './$curried-functions';
import {IndexedListMorphism, IndexedObjectMorphism, List, ListMapper, ObjectMapper} from './$types';

export function $list<T, U>(fn: ListMapper<T, U>): CurriedFunction2<IndexedListMorphism<T, U>, List<T>, U[]>;
export function $object<T, U, K extends string>(fn: ObjectMapper<T, U, K>): CurriedFunction2<IndexedObjectMorphism<T, U, K>, Record<K, T>, Record<K, U>>;
