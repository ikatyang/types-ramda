import * as R_subtract from 'ramda/src/subtract';

declare const number: number;

// @dts-jest
R_subtract(number, number);
// @dts-jest
R_subtract(number)(number);
