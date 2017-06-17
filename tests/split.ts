import * as R_split from 'ramda/src/split';

declare const regex: RegExp;
declare const string: string;

// @dts-jest
R_split(regex);
// @dts-jest
R_split(regex)(string);
// @dts-jest
R_split(regex, string);
