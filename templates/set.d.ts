import {Lens} from './$types';

export function $<T, U>(lens: Lens<T, U>, value: T, target: U): U;
