import {List, Property} from './$types';

export function $pick<T, K extends keyof T>(keys: List<K>, object: T): Pick<T, K>;
export function $general<T>(keys: List<Property>, object: T): Partial<T>;
