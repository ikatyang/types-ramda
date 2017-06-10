import * as R from 'ramda';

const mergeThree = (a: number, b: number, c: number): number[] =>
  ([] as number[]).concat(a, b, c);  // strictNullChecks: must cast array to right type
// @dts-jest
mergeThree(1, 2, 3); // => [1, 2, 3]
const flipped = R.flip(mergeThree);
// @dts-jest
flipped(1, 2, 3); // => [2, 1, 3]
