import * as R_insertAll from 'ramda/src/insertAll';

declare const object_array: object[];
declare const string_array: string[];
declare const number: number;

// @dts-jest
R_insertAll(number, string_array);
// @dts-jest
R_insertAll(number, string_array, object_array);
// @dts-jest
R_insertAll(number)(string_array)(object_array);
