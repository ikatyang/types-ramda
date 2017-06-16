import {List} from './$types';

export function $string(str: string): string;
export function $list<T>(list: List<T>): T[];
