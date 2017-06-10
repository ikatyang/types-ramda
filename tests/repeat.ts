import * as R from 'ramda';

// @dts-jest
R.repeat('hi', 5); // => ['hi', 'hi', 'hi', 'hi', 'hi']
const obj = {};
const repeatedObjs = R.repeat(obj, 5); // => [{}, {}, {}, {}, {}]
// @dts-jest
repeatedObjs[0] === repeatedObjs[1]; // => true
