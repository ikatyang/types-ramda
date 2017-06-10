import * as R from 'ramda';

R.pair('foo', 'bar'); // => ['foo', 'bar']
let p = R.pair('foo', 1); // => ['foo', 'bar']
// @dts-jest
p[0];
// @dts-jest
p[1];
