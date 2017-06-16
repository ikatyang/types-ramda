import * as R_match from 'ramda/src/match';

declare const regex: RegExp;
declare const string: string;

// @dts-jest
R_match(regex);
// @dts-jest
R_match(regex)(string);
// @dts-jest
R_match(regex, string);
