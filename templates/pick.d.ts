import {List, Property} from './$types';

export function $keyof<T, K extends keyof T>(keys: List<K>, object: T): Pick<T, K>;
export function $record<T extends Record<K, any>, K extends string>(keys: List<K>, object: T): Pick<T, K>;
export function $general<T>(keys: List<Property>, object: T): Partial<T>;
