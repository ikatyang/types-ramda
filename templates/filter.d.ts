import {Dictionary, Filterable, List, Predicate} from './$types';

export function $list<T>(fn: Predicate<T>, list: List<T>): T[];
export function $filterable<T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U): U;
export function $dictionary<T>(fn: Predicate<T>, object: Dictionary<T>): Dictionary<T>;
