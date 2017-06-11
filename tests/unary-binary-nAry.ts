import * as R from 'ramda';

const takesNoArg = () => true;
const takesOneArg = (a: number) => [a];
const takesTwoArgs = (a: number, b: number) => [a, b];
const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];

const addFourNumbers = (a: number, b: number, c: number, d: number): number => a + b + c + d;

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
curriedFourNumbers(1, 2, 4);
// @dts-jest
curriedFourNumbers(1)(2)(3)(4);
// @dts-jest
curriedFourNumbers(1, 2)(3, 4);
// @dts-jest
curriedFourNumbers(1, 2, 3)(4);

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

const addTwoNumbers = (a: number, b: number) => a + b;
const addTwoNumbersCurried = R.curry(addTwoNumbers);
// @dts-jest
addTwoNumbersCurried;

const inc = addTwoNumbersCurried(1);
// @dts-jest
inc(2);
// @dts-jest
addTwoNumbersCurried(2, 3);
