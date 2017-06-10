import * as R from 'ramda';

let lteTwo = function(x: number) {
    return x <= 2;
};
// @dts-jest
R.dropWhile(lteTwo, [1, 2, 3, 4]); // => [3, 4]
// @dts-jest
R.dropWhile(lteTwo)([1, 2, 3, 4]); // => [3, 4]
