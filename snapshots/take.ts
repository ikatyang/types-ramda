import * as R_take from '../ramda/dist/src/take';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass -> string
R_take(number, string);
// @dts-jest:pass -> boolean[]
R_take(number, boolean_array);
