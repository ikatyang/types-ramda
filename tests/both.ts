import * as R from 'ramda';

const gt10 = (x: number) => x > 10;
const even = (x: number) => x % 2 === 0;
const f = R.both(gt10, even);
const g = R.both(gt10)(even);
// @dts-jest
f(100); // => true
// @dts-jest
f(101); // => false
