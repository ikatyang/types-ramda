import * as R_add from 'ramda/src/add';

declare const number: number;

// @dts-jest
R_add(number, number);
// @dts-jest
R_add(number)(number);
