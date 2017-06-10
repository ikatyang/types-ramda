import * as R from 'ramda';

let gt10 = function(x: number) { return x > 10; };
let even = function(x: number) { return x % 2 === 0;};
let f = R.allPass([gt10, even]);
// @dts-jest
f(11); // => false
// @dts-jest
f(12); // => true
