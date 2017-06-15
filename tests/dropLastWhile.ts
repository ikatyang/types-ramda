import * as R_dropLastWhile from 'ramda/src/dropLastWhile';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest
R_dropLastWhile(string_to_boolean);
// @dts-jest
R_dropLastWhile(string_to_boolean, string_array);
