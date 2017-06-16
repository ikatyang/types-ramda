import * as R_mergeDeepLeft from 'ramda/src/mergeDeepLeft';

declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest
R_mergeDeepLeft(a_1);

// @dts-jest
R_mergeDeepLeft(a_1)(b_2);
// @dts-jest
R_mergeDeepLeft(a_1, b_2);

// @dts-jest
R_mergeDeepLeft(a_1)<{a: 1, b: 2}>(b_2);
// @dts-jest
R_mergeDeepLeft<{a: 1, b: 2}>(a_1, b_2);
