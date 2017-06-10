import * as R from 'ramda';

const double = (x: number): number => x + x;
const triple = (x: number): number => x * 3;
const square = (x: number): number => x * x;
const squareThenDoubleThenTriple = R.pipe(square, double, triple);
// @dts-jest
squareThenDoubleThenTriple(5); // => 150
