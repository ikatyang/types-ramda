import * as R from 'ramda';

let mergeThree = function(a: number, b: number, c: number): number[] {
  return ([] as number[]).concat(a, b, c);  // strictNullChecks: must cast array to right type
};
// @dts-jest
mergeThree(1, 2, 3); // => [1, 2, 3]
let flipped = R.flip(mergeThree);
// @dts-jest
flipped(1, 2, 3); // => [2, 1, 3]
