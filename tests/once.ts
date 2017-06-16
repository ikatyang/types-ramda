import * as R_once from 'ramda/src/once';

declare const T_to_T: <T>(value: T) => T;

// @dts-jest
R_once(T_to_T);
