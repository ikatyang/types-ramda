import * as R from 'ramda';

const obj = {};
// @dts-jest
R.identity([1, 2, 3]);
// @dts-jest
R.identity(['a', 'b', 'c']);
// @dts-jest
R.identity(obj) === obj; // => true
