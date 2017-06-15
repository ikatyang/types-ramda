import * as R_dropWhile from 'ramda/src/dropWhile';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest
R_dropWhile(string_to_boolean);
// @dts-jest
R_dropWhile(string_to_boolean, string_array);
