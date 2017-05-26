import * as R from 'ramda';

const double = (x: number) => x * 2;

// @dts-jest
R.map(double, [1, 2, 3]); // => [2, 4, 6]

// @dts-jest
R.map(double)([1, 2, 3]); // => [2, 4, 6]

// @dts-jest
R.map(double, {x: 1, y: 2, z: 3}); // => {x: 2, y: 4, z: 6}

// @dts-jest
R.map(double)({x: 1, y: 2, z: 3}); // => {x: 2, y: 4, z: 6}
