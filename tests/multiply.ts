import * as R_multiply from 'ramda/src/multiply';

declare const number: number;

// @dts-jest
R_multiply(number, number);
// @dts-jest
R_multiply(number)(number);
