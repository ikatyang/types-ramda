import * as R from 'ramda';

const addTwo = R.curry((x: number, y: number) => x + y);
// @dts-jest
addTwo(3);
// @dts-jest
addTwo(3)(1);
const addThree = R.curry((x: number, y: number, z: number) => x + y + z);
// @dts-jest
addThree(3, 2, 1);
// @dts-jest
addThree(3)(2)(1);
// @dts-jest
addThree(3, 2);
// @dts-jest
addThree(3)(2);
// @dts-jest
addThree(3);

const xy = R.curry(<X, Y>(x: X, y: Y) => ({x, y}));
// @dts-jest:skip <Y>(v2: Y) => { x: number; y: Y; }
xy(3);
// @dts-jest:skip { x: number; y: number; }
xy(3)(1);
const xyz = R.curry(<X, Y, Z>(x: X, y: Y, z: Z) => ({x, y, z}));
// @dts-jest:skip { x: number; y: number; z: number; }
xyz(3, 2, 1);
// @dts-jest:skip { x: number; y: number; z: number; }
xyz(3)(2)(1);
// @dts-jest:skip <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
xyz(3, 2);
// @dts-jest:skip <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
xyz(3)(2);
// @dts-jest:skip <Y, Z>(v2: Y, v3: Z) => ({ x: number; y: Y; z: Z; })
xyz(3);
