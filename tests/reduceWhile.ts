import * as R from 'ramda';

let isOdd = (x: number, acc: number) => x % 2 === 1;
let xs = [1, 3, 5, 60, 777, 800];
// @dts-jest
R.reduceWhile(isOdd, R.add, 0, xs); // => 9

let ys = [2, 4, 6];
// @dts-jest
R.reduceWhile(isOdd, R.add, 111, ys); // => 111
