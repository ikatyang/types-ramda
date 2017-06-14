import * as R_and from 'ramda/src/and';

declare const string: string;
declare const number: number;

// @dts-jest
R_and(string)(number);
// @dts-jest
R_and(string, number);
