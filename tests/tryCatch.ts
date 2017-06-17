import * as R_tryCatch from 'ramda/src/tryCatch';

declare const T_to_T: <T>(x: T) => T;

// @dts-jest
R_tryCatch(T_to_T);
// @dts-jest
R_tryCatch(T_to_T)(T_to_T);
// @dts-jest
R_tryCatch(T_to_T, T_to_T);
