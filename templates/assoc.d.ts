import {Property} from './$types';

export function $extend<K extends string, V, T>(property: K, value: V, object: T): T & Record<K, V>;
export function $remain<T>(property: Property, value: any, object: T): T;
