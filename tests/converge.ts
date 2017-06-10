import * as R from 'ramda';

let add = function(a: number, b: number) { return a + b; };
let multiply = function(a: number, b: number) { return a * b; };
let subtract = function(a: number, b: number) { return a - b; };

// ≅ multiply( add(1, 2), subtract(1, 2) );
// @dts-jest
R.converge(multiply, [ add, subtract ])(1, 2); // => -3

let add3 = function(a: number, b: number, c: number) { return a + b + c; };
// @dts-jest
R.converge(add3, [ multiply, add, subtract ])(1, 2); // => 4
