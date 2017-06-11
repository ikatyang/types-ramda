import * as R from 'ramda';

let f = function(n: number) { return n > 50 ? false : [-n, n + 10]; };
// @dts-jest:skip number[]
R.unfold(f, 10); // => [-10, -20, -30, -40, -50]
let b = R.unfold(f); // => [-10, -20, -30, -40, -50]
// @dts-jest:skip number[]
b(10);
