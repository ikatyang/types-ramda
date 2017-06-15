import * as R_drop from 'ramda/src/drop';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest
R_drop(number, string);
// @dts-jest
R_drop(number, boolean_array);
