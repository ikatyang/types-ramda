import * as R from 'ramda';

const xyLens = R.lensPath(['x', 'y']);
// @dts-jest:skip number
R.view(xyLens, {x: {y: 2, z: 3}});            // => 2
// @dts-jest:skip { [s: string]: { [s: string]: number } }
R.set(xyLens, 4, {x: {y: 2, z: 3}});          // => {x: {y: 4, z: 3}}
// @dts-jest:skip { [s: string]: { [s: string]: number } }
R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  // => {x: {y: -2, z: 3}}
