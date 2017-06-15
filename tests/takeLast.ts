import * as R_takeLast from 'ramda/src/takeLast';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest
R_takeLast(number, string);
// @dts-jest
R_takeLast(number, boolean_array);
