import * as R from 'ramda';

const isEven = (n: number) => n % 2 === 0;
// filter works with lists...
// @dts-jest
R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]
const isEvenFn = R.filter(isEven);
isEvenFn([1, 2, 3, 4]);
// ... but also objects
// @dts-jest:skip Dictionary<number>
R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, d: 4}

// check type information is not lost for lists
const onlyNumberList = (xs: number[]): number[] => xs;

// check type information is not lost for simple objects
const onlyNumberObj = (xs: {[key: string]: number}): {[key: string]: number} => xs;

// see that we did not break anything
// and we kept type information
// @dts-jest
onlyNumberList(R.filter(isEven, [1, 2, 3, 4]));
// @dts-jest:skip Dictionary<number>
onlyNumberObj(R.filter(isEven, {a: 1, b: 2, c: 3, d: 4})); // strictNullChecks: Partial fails, consider Pick
