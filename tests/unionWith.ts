import * as R_unionWith from 'ramda/src/unionWith';

declare const number_number_to_boolean: (a: number, b: number) => boolean;
declare const number_array: number[];

// @dts-jest
R_unionWith(number_number_to_boolean, number_array);
// @dts-jest
R_unionWith(number_number_to_boolean, number_array, number_array);