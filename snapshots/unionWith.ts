import * as R_unionWith from '../ramda/dist/src/unionWith';

declare const number_number_to_boolean: (a: number, b: number) => boolean;
declare const number_array: number[];

// @dts-jest:pass -> <T$1 extends number = number>(b: T$1[] | ArrayLike<T$1>) => T$1[]
R_unionWith(number_number_to_boolean, number_array);
// @dts-jest:pass -> number[]
R_unionWith(number_number_to_boolean, number_array, number_array);
