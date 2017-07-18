import {List, Property} from './$types';

export function $pick<T, K extends keyof T>(keys: List<K>, object: T): Pick<T, K>;
export function $partial<T>(keys: List<Property>, object: T): Partial<T>;
