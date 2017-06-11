import * as R from 'ramda';

let plusFive = function(num: number, idx: number, list: number[]) { list[idx] = num + 5; };
// @dts-jest:skip number[]
R.addIndex(R.forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
