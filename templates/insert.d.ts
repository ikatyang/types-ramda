import {List} from './$types';

export function $<T, U>(index: number, value: U, list: List<T>): (T | U)[];
