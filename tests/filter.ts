import * as R from 'ramda';

const isEven = (n: number) => n % 2 === 0;

// @dts-jest
R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]

// @dts-jest
R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, d: 4}
