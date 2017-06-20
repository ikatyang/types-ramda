import * as R_until from 'ramda/src/until';

declare const number_to_boolean: (x: number) => boolean;
declare const number_to_number: (x: number) => number;
declare const number: number;

// @dts-jest:pass
R_until(number_to_boolean, number_to_number);
// @dts-jest:pass
R_until(number_to_boolean)(number_to_number)(number);
// @dts-jest:pass
R_until(number_to_boolean, number_to_number, number);
