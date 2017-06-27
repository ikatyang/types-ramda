import * as R_insert from '../ramda/dist/src/insert';

declare const object_array: object[];
declare const string: string;
declare const number: number;

// @dts-jest:pass
R_insert(number, string);
// @dts-jest:pass
R_insert(number, string, object_array);
// @dts-jest:pass
R_insert(number)(string)(object_array);
