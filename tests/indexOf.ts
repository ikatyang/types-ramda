import * as R_indexOf from 'ramda/src/indexOf';

declare const string: string;
declare const string_array: string[];

// @dts-jest
R_indexOf(string);
// @dts-jest
R_indexOf(string, string);
// @dts-jest
R_indexOf(string, string_array);
