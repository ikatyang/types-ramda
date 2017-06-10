import * as R from 'ramda';

type Task = {a: number};
let xs = [{a: 1}, {a: 2}, {a: 3}];
const a: (list: Task[]) => number = R.findIndex(R.propEq('a', 2));
// @dts-jest
a(xs); // => 1
// @dts-jest
R.findIndex(R.propEq('a', 4))(xs); // => -1

// @dts-jest
R.findIndex((x: number) => x === 1, [1, 2, 3]);
