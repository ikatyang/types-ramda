import * as R_symmetricDifference from '../ramda/dist/src/symmetricDifference';

declare const number_array: number[];

// @dts-jest:pass -> <T$1 extends number = number>(b: T$1[] | ArrayLike<T$1>) => T$1[]
R_symmetricDifference(number_array);
// @dts-jest:pass -> number[]
R_symmetricDifference(number_array, number_array);
