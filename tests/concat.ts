import * as R from 'ramda';

R.concat([], []); // => []   // let r: [] =
// @dts-jest
R.concat([4, 5, 6], [1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
// @dts-jest
R.concat([4, 5, 6])([1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
// @dts-jest
R.concat('ABC')('DEF'); // 'ABCDEF'
