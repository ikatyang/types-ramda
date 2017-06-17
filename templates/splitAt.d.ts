import {List} from './$types';

export function $string(index: number, str: string): string[];
export function $list<T>(index: number, list: List<T>): T[][];
