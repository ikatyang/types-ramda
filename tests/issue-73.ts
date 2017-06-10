import * as R from 'ramda';

let filterMatrix = function (v: number, m: Array<Array<number>>): Array<number> {
  return R.chain(R.filter((c: number) => c === v), m);
  // return R.chain(R.filter(R.equals(v)), m)
};
let b = [
    [0, 1],
    [1, 0]
];
// @dts-jest
filterMatrix(1, b); // --> [1, 1]

// compiles
let filterMatrix2 = function (v: number, m: Array<Array<number>>): Array<number> {
    return R.chain((r: number[]) => R.filter((c: number) => c === v, r), m);
};

// also compiles
let mapMatrix3 = function(fn: (v: number) => number, m: Array<Array<number>>): Array<number> {
  return R.chain(R.map((c: number) => fn(c)), m);
};
