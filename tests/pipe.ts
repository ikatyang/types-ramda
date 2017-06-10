import * as R from 'ramda';

let double = (x: number): number => x + x;
let triple = function(x: number): number { return x * 3; };
let square = function(x: number): number { return x * x; };
let squareThenDoubleThenTriple = R.pipe(square, double, triple);
// @dts-jest
squareThenDoubleThenTriple(5); // => 150
