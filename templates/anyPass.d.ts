import { Predicate } from './$types';

export function $<T>(fns: Predicate<T>[]): Predicate<T>;
