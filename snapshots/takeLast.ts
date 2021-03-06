import * as R_takeLast from '../ramda/dist/src/takeLast';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass -> string
R_takeLast(number, string);
// @dts-jest:pass -> boolean[]
R_takeLast(number, boolean_array);
