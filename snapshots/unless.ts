import * as R_unless from '../ramda/dist/src/unless';

declare const number_to_boolean: (x: number) => boolean;
declare const number_to_string: (x: number) => string;
declare const number: number;

// @dts-jest:pass -> (value: number) => string | number
R_unless(number_to_boolean, number_to_string);
// @dts-jest:pass -> string | number
R_unless(number_to_boolean)(number_to_string)(number);
// @dts-jest:pass -> string | number
R_unless(number_to_boolean, number_to_string, number);
