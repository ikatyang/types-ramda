import * as R_lastIndexOf from 'ramda/src/lastIndexOf';

declare const string: string;
declare const string_array: string[];

// @dts-jest
R_lastIndexOf(string);
// @dts-jest
R_lastIndexOf(string, string);
// @dts-jest
R_lastIndexOf(string, string_array);
