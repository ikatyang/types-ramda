import * as R_without from '../ramda/dist/src/without';

declare const number_array: number[];

// @dts-jest:pass -> <T$1 extends number = number>(b: T$1[] | ArrayLike<T$1>) => T$1[]
R_without(number_array);
// @dts-jest:pass -> number[]
R_without(number_array, number_array);
