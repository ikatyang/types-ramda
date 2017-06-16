import * as R_nth from 'ramda/src/nth';

declare const number: number;
declare const string: string;
declare const object_array: object[];

// @dts-jest
R_nth(number)(string);
// @dts-jest
R_nth(number, string);

// @dts-jest
R_nth(number)(object_array);
// @dts-jest
R_nth(number, object_array);
