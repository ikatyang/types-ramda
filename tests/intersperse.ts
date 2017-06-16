import * as R_intersperse from 'ramda/src/intersperse';

declare const object_array: object[];
declare const string: string;

// @dts-jest
R_intersperse(string);
// @dts-jest
R_intersperse(string, object_array);
// @dts-jest
R_intersperse(string)(object_array);
