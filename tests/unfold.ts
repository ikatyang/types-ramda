import * as R from 'ramda';

const f = (n: number) => n > 50 ? false : [-n, n + 10];
// @dts-jest:skip number[]
R.unfold(f, 10); // => [-10, -20, -30, -40, -50]
const b = R.unfold(f); // => [-10, -20, -30, -40, -50]
// @dts-jest:skip number[]
b(10);
