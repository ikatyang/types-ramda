import {Predicate} from './$types';

export function $<T>(fn1: Predicate<T>, fn2: Predicate<T>): Predicate<T>;
