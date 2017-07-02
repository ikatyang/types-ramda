import * as R_equals from '../ramda/dist/src/equals';

declare const string: string;

// @dts-jest:pass -> <T$1 extends string = string>(b: T$1) => boolean
R_equals(string);
// @dts-jest:pass -> boolean
R_equals(string)(string);
// @dts-jest:pass -> boolean
R_equals(string, string);
