import {List} from './$types';

export function $string(n: number, str: string): string;
export function $general<T>(n: number, list: List<T>): T | undefined;
