import {Constructor, Property} from './$types';

export function $record<T, U, K extends string>(constructor: Constructor<T>, key: K, object: U): object is U & Record<K, T>;
export function $general(constructor: Constructor<any>, key: Property, object: any): boolean;
