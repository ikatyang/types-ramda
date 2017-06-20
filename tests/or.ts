import * as R_or from 'ramda/src/or';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_or(string)(number);
// @dts-jest:pass
R_or(string, number);
