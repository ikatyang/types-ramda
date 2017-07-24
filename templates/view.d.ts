import { Lens } from './$types';

export function $<T, U>(lens: Lens<T, U>, target: U): T;
