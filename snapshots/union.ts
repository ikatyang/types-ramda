import * as R_union from '../ramda/dist/src/union';

declare const number_array: number[];

// @dts-jest:pass -> <T$1 extends number = number>(b: T$1[] | ArrayLike<T$1>) => T$1[]
R_union(number_array);
// @dts-jest:pass -> number[]
R_union(number_array, number_array);
