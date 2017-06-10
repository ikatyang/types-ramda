import * as R from 'ramda';

declare const filterMatrix: (v: number, m: number[][]) => number[];
  // R.chain(R.filter((c: number) => c === v), m);
  // return R.chain(R.filter(R.equals(v)), m)

const b = [
  [0, 1],
  [1, 0],
];
// @dts-jest
filterMatrix(1, b); // --> [1, 1]

// compiles
const filterMatrix2 = (v: number, m: number[][]): number[] =>
   R.chain((r: number[]) => R.filter((c: number) => c === v, r), m);

// also compiles
const mapMatrix3 = (fn: (v: number) => number, m: number[][]): number[] =>
  R.chain(R.map(fn), m);
