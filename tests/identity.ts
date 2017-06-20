import * as R_identity from 'ramda/src/identity';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_identity(string);
// @dts-jest:pass
R_identity(number);
