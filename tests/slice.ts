import * as R from 'ramda';

const xs = R.range(0, 10);
// @dts-jest
R.slice(2, 5, xs); // => [2, 3, 4]
// @dts-jest
R.slice(2, 5)(xs); // => [2, 3, 4]
// @dts-jest
R.slice(2)(5, xs); // => [2, 3, 4]

// tslint:disable-next-line:prefer-const
let str = 'Hello World';
// @dts-jest
R.slice(2, 5, str); // => 'llo'
// @dts-jest
R.slice(2, 5)(str); // => 'llo'
// @dts-jest
R.slice(2)(5, str); // => 'llo'
