import * as R from 'ramda';

let xs = [{a: 1}, {a: 2}, {a: 3}];
// @dts-jest:skip Dictionary<number>
R.find(R.propEq('a', 2))(xs); // => {a: 2}
// @dts-jest:skip undefined
R.find(R.propEq('a', 4))(xs); // => undefined
