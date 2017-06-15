import * as R_takeLastWhile from 'ramda/src/takeLastWhile';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest
R_takeLastWhile(string_to_boolean);
// @dts-jest
R_takeLastWhile(string_to_boolean, string_array);
