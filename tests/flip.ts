import * as R from 'ramda';

const mergeThree = (a: number, b: string, c: boolean) => [a, b, c];

// @dts-jest
R.flip(mergeThree)(1, 2, 3);

// @dts-jest
R.flip(mergeThree)('str', 2, 3);

// @dts-jest
R.flip(mergeThree)('str', 2, false);
