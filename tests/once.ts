import * as R from 'ramda';

const addOneOnce = R.once((x: number) => x + 1);
// @dts-jest
addOneOnce(10); // => 11
// @dts-jest
addOneOnce(addOneOnce(50)); // => 11
