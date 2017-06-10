import * as R from 'ramda';

// @dts-jest
R.contains(3)([1, 2, 3]); // => true
// @dts-jest
R.contains(3, [1, 2, 3]); // => true
// @dts-jest
R.contains(4)([1, 2, 3]); // => false
// @dts-jest
R.contains({})([{}, {}]); // => false
const obj = {};
// @dts-jest
R.contains(obj)([{}, obj, {}]); // => true
