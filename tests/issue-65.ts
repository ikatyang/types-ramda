import * as R from 'ramda';

// #65, evolve issue
const test = {a: 1, b: 2};
// @dts-jest:skip { a: number, b: number }
R.evolve({a: R.add(1)}, test);
