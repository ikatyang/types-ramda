import * as R_tryCatch from '../ramda/dist/src/tryCatch';

declare const T_to_T: <T>(x: T) => T;

// @dts-jest:pass -> <F$1 extends <T>(x: T) => T = <T>(x: T) => T>(catcher: F$1) => F$1
R_tryCatch(T_to_T);
// @dts-jest:pass -> <T>(x: T) => T
R_tryCatch(T_to_T)(T_to_T);
// @dts-jest:pass -> <T>(x: T) => T
R_tryCatch(T_to_T, T_to_T);
