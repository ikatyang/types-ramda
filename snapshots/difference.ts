import * as R_difference from '../ramda/dist/src/difference';

declare const number_array: number[];

// @dts-jest:pass -> <T$1 extends number = number>(b: T$1[] | ArrayLike<T$1>) => T$1[]
R_difference(number_array);
// @dts-jest:pass -> number[]
R_difference(number_array, number_array);
