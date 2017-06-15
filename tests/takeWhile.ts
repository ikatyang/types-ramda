import * as R_takeWhile from 'ramda/src/takeWhile';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest
R_takeWhile(string_to_boolean);
// @dts-jest
R_takeWhile(string_to_boolean, string_array);
