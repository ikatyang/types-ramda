import {List} from './$types';

export function $<T, U>(value: U, list: List<T>): (T | U)[];
