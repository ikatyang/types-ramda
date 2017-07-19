import {Omit} from './$operation';
import {Property} from './$types';

export function $keyof<T, K extends keyof T>(property: K, object: T): Omit<T, K>;
export function $record<T extends Record<K, any>, K extends string>(property: K, object: T): Omit<T, K>;
export function $general<T>(property: Property, object: T): T;
