import { Lens, Morphism } from './$types';

export function $<T, U>(lens: Lens<T, U>, fn: Morphism<T, T>, target: U): U;
