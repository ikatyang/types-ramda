import {Morphism, Ordered} from './$types';

export function $<T, U extends Ordered>(fn: Morphism<T, U>, a: T, b: T): number;
