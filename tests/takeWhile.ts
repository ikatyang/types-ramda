import * as R from 'ramda';

let isNotFour = function(x: number) {
    return !(x === 4);
};
// @dts-jest
R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
// @dts-jest
R.takeWhile(isNotFour)([1, 2, 3, 4]); // => [1, 2, 3]
