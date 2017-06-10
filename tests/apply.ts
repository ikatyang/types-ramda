import * as R from 'ramda';

let nums = [1, 2, 3, -99, 42, 6, 7];
// @dts-jest
R.apply(Math.max, nums); // => 42
// @dts-jest
R.apply(Math.max)(nums); // => 42
