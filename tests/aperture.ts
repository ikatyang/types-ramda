import * as R_aperture from 'ramda/src/aperture';

declare const number: number;
declare const string_array: string[];

// @dts-jest
R_aperture(number)(string_array);
// @dts-jest
R_aperture(number, string_array);
