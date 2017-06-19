import {Lens, List} from './$types';

export function $<T, U extends List<T>>(index: number): Lens<T, U>;
