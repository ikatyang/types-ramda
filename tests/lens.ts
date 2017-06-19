import * as R_lens from 'ramda/src/lens';

declare const object_to_string: (x: object) => string;
declare const string_object_to_object: (x: string, y: object) => object;

// @dts-jest
R_lens(object_to_string);
// @dts-jest
R_lens(object_to_string)(string_object_to_object);
// @dts-jest
R_lens(object_to_string, string_object_to_object);
