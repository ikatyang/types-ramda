import * as R_min from 'ramda/src/min';

declare const number: number;
declare const string: string;

// @dts-jest
R_min(string);
// @dts-jest
R_min(number);
// @dts-jest
R_min(number, number);
