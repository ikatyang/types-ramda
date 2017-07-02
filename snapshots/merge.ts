import * as R_merge from '../ramda/dist/src/merge';

declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass -> <U>(b: U) => { a: 1; } & U
R_merge(a_1);
// @dts-jest:pass -> { a: 1; } & { b: 2; }
R_merge(a_1)(b_2);
// @dts-jest:pass -> { a: 1; } & { b: 2; }
R_merge(a_1, b_2);
