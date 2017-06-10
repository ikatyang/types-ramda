import * as R from 'ramda';

const f = R.pipe(Math.pow, R.negate, R.inc);
// @dts-jest
f(3, 4); // -(3^4) + 1
