import * as R from 'ramda';

let takesNoArg = function() { return true; };
let takesOneArg = function(a: number) { return [a]; };
let takesTwoArgs = function(a: number, b: number) { return [a, b]; };
let takesThreeArgs = function(a: number, b: number, c: number) { return [a, b, c]; };

let addFourNumbers = function(a: number, b: number, c: number, d: number): number {
  return a + b + c + d;
};

const curriedFourNumbers = R.curry(addFourNumbers);
// @dts-jest
curriedFourNumbers;
// @dts-jest
curriedFourNumbers(1);
// @dts-jest
curriedFourNumbers(1)(2);
// @dts-jest:skip <T1,R>(v1: T1) => R
curriedFourNumbers(1)(2)(3);
// @dts-jest:skip <T1,R>(v1: T1) => R
curriedFourNumbers(1,2,4);
// @dts-jest
curriedFourNumbers(1)(2)(3)(4);
// @dts-jest
curriedFourNumbers(1,2)(3,4);
// @dts-jest
curriedFourNumbers(1,2,3)(4);

// @dts-jest:skip () => boolean
R.nAry(0, takesNoArg);
// @dts-jest:skip () => number[]
R.nAry(0, takesOneArg);
// @dts-jest:skip (a: number) => number[]
R.nAry(1, takesTwoArgs);
// @dts-jest:skip (a: number) => number[]
R.nAry(1, takesThreeArgs);

// @dts-jest:skip (a: number) => number[]
R.unary(takesOneArg);
// @dts-jest:skip (a: number) => number[]
R.unary(takesTwoArgs);
// @dts-jest:skip (a: number) => number[]
R.unary(takesThreeArgs);

// @dts-jest:skip (a: number, b: number) => number[]
R.binary(takesTwoArgs);
// @dts-jest:skip (a: number, b: number) => number[]
R.binary(takesThreeArgs);

let addTwoNumbers = function(a: number, b: number) { return a + b; };
let addTwoNumbersCurried = R.curry(addTwoNumbers);
// @dts-jest
addTwoNumbersCurried;

let inc = addTwoNumbersCurried(1);
// @dts-jest
inc(2);
// @dts-jest
addTwoNumbersCurried(2,3);
