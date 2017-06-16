import * as R_join from 'ramda/src/join';

declare const string: string;
declare const number_array: string[];

// @dts-jest
R_join(string);
// @dts-jest
R_join(string)(number_array);
// @dts-jest
R_join(string, number_array);
