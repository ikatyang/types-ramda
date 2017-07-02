import {List, Morphism} from './$types';

export function $<T>(fn: Morphism<T, T>, index: number, list: List<T>): T[];
