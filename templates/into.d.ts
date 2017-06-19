import {Reduced, Transformer} from './$types';

// TODO: support implicit built-in transformer: R.take, R.drop, etc.
export function $transformer<T, U>(
    initial: Transformer<T, U, U>,
    transducer: (transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>,
    values: T[],
): U;
export function $base<T, V extends string | object>(
    initial: V,
    transducer: (transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>,
    values: T[],
): V;
