import {KeyedObjectMorphism} from './$types';

export function $remain<T>(fn: KeyedObjectMorphism<any, boolean, string>, object: T): T;
export function $manual<V>(fn: KeyedObjectMorphism<any, boolean, string>, object: any): V;
