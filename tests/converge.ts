import * as R from 'ramda';

const add = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;
const subtract = (a: number, b: number) => a - b;

// ≅ multiply( add(1, 2), subtract(1, 2) );
// @dts-jest
R.converge(multiply, [add, subtract])(1, 2); // => -3
const add3 = (a: number, b: number, c: number) => [a + b + c];
// @dts-jest
R.converge(add3, [multiply, add, subtract])(1, 2); // => 4
