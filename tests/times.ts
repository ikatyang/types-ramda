import * as R_times from 'ramda/src/times';

declare const number_to_object: (x: number) => object;
declare const number: number;

// @dts-jest
R_times(number_to_object);
// @dts-jest
R_times(number_to_object, number);
