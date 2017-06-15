import {Comparator} from './$types';

export function $<T>(fn: (a: T, b: T) => boolean): Comparator<T>;
