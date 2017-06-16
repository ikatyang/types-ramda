import * as R_memoize from 'ramda/src/memoize';

declare const T_to_T: <T>(value: T) => T;

// @dts-jest
R_memoize(T_to_T);
