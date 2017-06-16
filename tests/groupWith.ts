import * as R_groupWith from 'ramda/src/groupWith';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];
declare const string: string;

// @dts-jest
R_groupWith(string_to_boolean);
// @dts-jest
R_groupWith(string_to_boolean, string);
// @dts-jest
R_groupWith(string_to_boolean, string_array);
