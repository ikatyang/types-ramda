import * as R_identical from '../ramda/dist/src/identical';

declare const string: string;

// @dts-jest:pass -> <T$1 extends string = string>(b: T$1) => boolean
R_identical(string);
// @dts-jest:pass -> boolean
R_identical(string)(string);
// @dts-jest:pass -> boolean
R_identical(string, string);
