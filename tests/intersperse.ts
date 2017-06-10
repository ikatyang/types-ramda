import * as R from 'ramda';

// @dts-jest
R.intersperse(',', ['foo', 'bar']); // => ['foo', ',', 'bar']
// @dts-jest
R.intersperse(0, [1, 2]); // => [1, 0, 2]
// @dts-jest
R.intersperse(0, [1]); // => [1]
