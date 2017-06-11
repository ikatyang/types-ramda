import * as R from 'ramda';

const isEven = (n: number) => n % 2 === 0;
const filterIndexed = R.addIndex(R.filter);

// @dts-jest
R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]

const lastTwo = (val: number, idx: number, list: number[]) =>
  list.length - idx <= 2;
// @dts-jest:skip number[]
filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]

const isOdd = (n: number) => n % 2 === 1;
// @dts-jest
R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
