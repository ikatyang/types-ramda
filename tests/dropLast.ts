import * as R_dropLast from 'ramda/src/dropLast';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest
R_dropLast(number, string);
// @dts-jest
R_dropLast(number, boolean_array);
