import {Morphism, Reduced, Transformer} from './$types';

// TODO: support implicit built-in transformer: R.take, R.drop, etc.
export function $<T, U>(
    transducer: Morphism<Transformer<T, U, U>, Transformer<T, U, U>>,
    fn: (accumulator: U, value: T) => U | Reduced<U>,
    initial: U,
    values: T[],
): U;
