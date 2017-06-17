import * as R_update from 'ramda/src/update';

declare const string_array: string[];
declare const boolean: boolean;
declare const number: number;

// @dts-jest
R_update(number, boolean);
// @dts-jest
R_update(number)(boolean)(string_array);
// @dts-jest
R_update(number, boolean, string_array);
