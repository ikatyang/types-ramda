import * as R from 'ramda';

// @dts-jest
R.path(['a', 'b'], {a: {b: 2}}); // => 2
// @dts-jest:skip number
R.path(['a', 'b'])({a: {b: 2}}); // => 2
