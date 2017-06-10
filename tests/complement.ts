import * as R from 'ramda';

let isEven = function(n: number) { return n % 2 === 0; };
let isOdd = R.complement(isEven);
// @dts-jest
isOdd(21); // => true
// @dts-jest
isOdd(42); // => false
