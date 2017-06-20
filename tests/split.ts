import * as R_split from 'ramda/src/split';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass
R_split(regex);
// @dts-jest:pass
R_split(regex)(string);
// @dts-jest:pass
R_split(regex, string);
