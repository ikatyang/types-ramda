import {Functor, List, Property} from './$types';

export function $keyof<T, K extends keyof T>(key: K, list: List<T>): T[K][];
export function $record<K extends string, V, T extends Record<K, V>>(key: K, list: List<T>): T[K][];
export function $manual<V>(key: Property, object: any): V;