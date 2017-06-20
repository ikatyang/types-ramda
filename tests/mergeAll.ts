import * as R_mergeAll from 'ramda/src/mergeAll';

declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass
R_mergeAll([a_1, b_2]);
// @dts-jest:pass
R_mergeAll<{a: 1, b: 2}>([a_1, b_2]);
