import {Morphism, Predicate} from './$types';

export function $<T, U>(fns: [Predicate<T>, Morphism<T, U>][]): Morphism<T, U>;
