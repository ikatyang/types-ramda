import {List} from './$types';

export function $list<T>(value: List<T>): T[];
export function $general<T>(value: T): T;
