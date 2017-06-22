import * as R_empty from 'ramda/src/empty';

declare const object: object;
declare const string: string;
declare const string_array: string[];

// @dts-jest:pass
R_empty(object);
// @dts-jest:pass
R_empty(string);
// @dts-jest:pass
R_empty(string_array);
