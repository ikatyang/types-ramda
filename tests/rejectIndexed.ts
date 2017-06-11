import * as R from 'ramda';

const lastTwo = (val: number, idx: number, list: number[]) => list.length - idx <= 2;
const rejectIndexed = R.addIndex(R.reject);
// @dts-jest:skip number[]
rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
// @dts-jest:skip number[]
rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
