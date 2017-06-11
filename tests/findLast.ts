import * as R from 'ramda';

let xs = [{a: 1, b: 0}, {a: 1, b: 1}];
// @dts-jest:skip Dictionary<number>
R.findLast(R.propEq('a', 1))(xs); // => {a: 1, b: 1}
// @dts-jest:skip undefined
R.findLast(R.propEq('a', 4))(xs); // => undefined
