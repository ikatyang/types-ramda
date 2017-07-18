import {Dictionary, KeyedObjectMorphism} from './$types';

export function $<T, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>, object: U): Partial<U>;
