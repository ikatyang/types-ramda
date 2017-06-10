import * as R from 'ramda';

const isEven = (n: number) => n % 2 === 0;
const isOdd = R.complement(isEven);
// @dts-jest
isOdd(21); // => true
// @dts-jest
isOdd(42); // => false
