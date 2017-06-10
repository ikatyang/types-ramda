import * as R from 'ramda';

const gt10 = (x: number) => x > 10;
const even = (x: number) => x % 2 === 0;
const f = R.allPass([gt10, even]);
// @dts-jest
f(11); // => false
// @dts-jest
f(12); // => true
