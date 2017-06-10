import * as R from 'ramda';

let isOdd = function(n: number) {
    return n % 2 === 1;
};
// @dts-jest
R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
const a2 = R.reject(isOdd);
// @dts-jest
R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
