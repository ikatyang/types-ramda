import {Dictionary, List, Predicate} from './$types';

export function $list<T>(fn: Predicate<T>, list: List<T>): [T[], T[]];
export function $object<T, U extends Dictionary<T>>(fn: Predicate<T>, dictionary: U): [Partial<U>, Partial<U>];
