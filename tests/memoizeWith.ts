import * as R_memoizeWith from 'ramda/src/memoizeWith';

declare const any_to_string: (x: any) => string;
declare const T_to_T: <T>(value: T) => T;

// @dts-jest
R_memoizeWith(any_to_string);
// @dts-jest
R_memoizeWith(any_to_string)(T_to_T);
// @dts-jest
R_memoizeWith(any_to_string, T_to_T);
