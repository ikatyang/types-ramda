import * as R_o from 'ramda/src/o';

declare const number_to_string: (x: number) => string;
declare const boolean_to_number: (x: boolean) => number;
declare const boolean: boolean;

// @dts-jest
R_o(number_to_string, boolean_to_number);
// @dts-jest
R_o(number_to_string)(boolean_to_number)(boolean);
// @dts-jest
R_o(number_to_string, boolean_to_number, boolean);
