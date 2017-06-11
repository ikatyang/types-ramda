import * as R from 'ramda';

let duplicate = function(n: number) {
    return [n, n];
};
// @dts-jest
R.chain(duplicate, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
// @dts-jest
R.chain(duplicate)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
// @dts-jest:skip number[]
R.chain(R.append, R.head)([1, 2, 3]); // => [1, 2, 3, 1]
// @dts-jest:skip number[]
R.chain(R.append)(R.head)([1, 2, 3]); // => [1, 2, 3, 1]
