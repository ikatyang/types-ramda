import * as R from 'ramda';

let isEven = function(n: number) {
    return n % 2 === 0;
};
// filter works with lists...
// @dts-jest
R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]
let isEvenFn = R.filter(isEven);
isEvenFn([1, 2, 3, 4]);
// ... but also objects
// @dts-jest:skip Dictionary<number>
R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, d: 4}
let isEvenFnObj = R.filter(isEven);

// check type information is not lost for lists
let onlyNumberList = function(xs: number[]): number[] {
  return xs;
}

// check type information is not lost for simple objects
let onlyNumberObj = function(xs: {[key: string]: number}): {[key: string]: number} {
  return xs;
}

// see that we did not break anything
// and we kept type information
// @dts-jest
onlyNumberList(R.filter(isEven,[1,2,3,4]));
// @dts-jest:skip Dictionary<number>
onlyNumberObj(R.filter(isEven, {a: 1, b: 2, c: 3, d: 4})); // strictNullChecks: Partial fails, consider Pick
