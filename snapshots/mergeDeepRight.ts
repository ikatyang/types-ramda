import * as R_mergeDeepRight from '../ramda/dist/src/mergeDeepRight';

declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass -> <T>(right: object) => T
R_mergeDeepRight(a_1);

// @dts-jest:pass -> {}
R_mergeDeepRight(a_1)(b_2);
// @dts-jest:pass -> {}
R_mergeDeepRight(a_1, b_2);

// @dts-jest:pass -> { a: 1; b: 2; }
R_mergeDeepRight(a_1)<{a: 1, b: 2}>(b_2);
// @dts-jest:pass -> { a: 1; b: 2; }
R_mergeDeepRight<{a: 1, b: 2}>(a_1, b_2);
