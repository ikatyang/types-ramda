import * as R_dropRepeatsWith from 'ramda/src/dropRepeatsWith';

declare const string_to_number: (x: string) => number;
declare const string_array: string[];

// @dts-jest
R_dropRepeatsWith(string_to_number);
// @dts-jest
R_dropRepeatsWith(string_to_number)(string_array);
// @dts-jest
R_dropRepeatsWith(string_to_number, string_array);
