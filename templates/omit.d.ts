import {List, Property} from './$types';

export function $remain<T>(keys: List<Property>, object: T): T;
export function $manual<V>(keys: List<Property>, object: any): V;
