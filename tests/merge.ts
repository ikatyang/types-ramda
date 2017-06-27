import * as R_merge from '../ramda/dist/src/merge';

declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass
R_merge(a_1);
// @dts-jest:pass
R_merge(a_1)(b_2);
// @dts-jest:pass
R_merge(a_1, b_2);
