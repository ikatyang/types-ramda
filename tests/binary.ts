import * as R from 'ramda';

const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];
// @dts-jest
takesThreeArgs.length; // => 3
// @dts-jest
takesThreeArgs(1, 2, 3); // => [1, 2, 3]

const takesTwoArgs = R.binary(takesThreeArgs);
// @dts-jest
takesTwoArgs.length; // => 2
// Only 2 arguments are passed to the wrapped function
// @dts-jest:skip Supplied parameters do not match any signature of call target.
takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
