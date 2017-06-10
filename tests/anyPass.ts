import * as R from 'ramda';

let gt10 = function(x: number) { return x > 10; };
let even = function(x: number) { return x % 2 === 0;};
let f = R.anyPass([gt10, even]);
// @dts-jest
f(11); // => true
// @dts-jest
f(8); // => true
// @dts-jest
f(9); // => false
