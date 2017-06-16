import * as R_replace from 'ramda/src/replace';

declare const regex: RegExp;
declare const string: string;

// @dts-jest
R_replace(regex, string);
// @dts-jest
R_replace(regex)(string)(string);
// @dts-jest
R_replace(regex, string, string);
