import * as R from 'ramda';

let gt10 = function(x: number) { return x > 10; };
let even = function(x: number) { return x % 2 === 0; };
let f = R.both(gt10, even);
let g = R.both(gt10)(even);
// @dts-jest
f(100); // => true
// @dts-jest
f(101); // => false
