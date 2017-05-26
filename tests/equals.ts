import * as R from 'ramda';

// @dts-jest
R.equals(1, 1); // => true

// @dts-jest
R.equals([1, 2, 3], [1, 2, 3]); // => true

type V = { v?: any };
const a: V = {}; a.v = a;
const b: V = {}; b.v = b;

// @dts-jest
R.equals(a, b); // => true
