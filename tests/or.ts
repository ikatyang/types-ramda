import * as R_or from 'ramda/src/or';

declare const string: string;
declare const number: number;

// @dts-jest
R_or(string)(number);
// @dts-jest
R_or(string, number);
