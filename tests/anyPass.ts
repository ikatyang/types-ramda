import * as R from 'ramda';

const gt10 = (x: number) => x > 10;
const even = (x: number) => x % 2 === 0;
const f = R.anyPass([gt10, even]);
// @dts-jest
f(11); // => true
// @dts-jest
f(8); // => true
// @dts-jest
f(9); // => false
