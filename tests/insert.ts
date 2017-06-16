import * as R_insert from 'ramda/src/insert';

declare const object_array: object[];
declare const string: string;
declare const number: number;

// @dts-jest
R_insert(number, string);
// @dts-jest
R_insert(number, string, object_array);
// @dts-jest
R_insert(number)(string)(object_array);
