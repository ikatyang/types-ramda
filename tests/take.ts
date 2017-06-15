import * as R_take from 'ramda/src/take';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest
R_take(number, string);
// @dts-jest
R_take(number, boolean_array);
