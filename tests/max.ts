import * as R_max from 'ramda/src/max';

declare const number: number;
declare const string: string;

// @dts-jest
R_max(string);
// @dts-jest
R_max(number);
// @dts-jest
R_max(number, number);
