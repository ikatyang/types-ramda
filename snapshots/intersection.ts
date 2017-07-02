import * as R_intersection from '../ramda/dist/src/intersection';

declare const number_array: number[];

// @dts-jest:pass -> <T$1 extends number = number>(b: T$1[] | ArrayLike<T$1>) => T$1[]
R_intersection(number_array);
// @dts-jest:pass -> number[]
R_intersection(number_array, number_array);
