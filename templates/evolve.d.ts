import {Morphism, NestedDictionary} from './$types';

export function $remain<T>(transformations: NestedDictionary<Morphism<any, any>>, object: T): T;
export function $manual<T>(transformations: NestedDictionary<Morphism<any, any>>, object: object): T;
