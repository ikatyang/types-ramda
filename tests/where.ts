import * as R from 'ramda';

const spec = {x: 2};
// @dts-jest
R.where(spec, {w: 10, x: 2, y: 300}); // => true
// @dts-jest
R.where(spec, {x: 1, y: 'moo', z: true}); // => false
// @dts-jest
R.where(spec)({w: 10, x: 2, y: 300}); // => true
// @dts-jest
R.where(spec)({x: 1, y: 'moo', z: true}); // => false

// There's no way to represent the below functionality in typescript
// per http: //stackoverflow.com/a/29803848/632495
// will need a work around.

const spec2 = {x: (val: number, obj: any) =>
  val + (obj.y as number) > 10};
// @dts-jest
R.where(spec2, {x: 2, y: 7}); // => false
// @dts-jest
R.where(spec2, {x: 3, y: 8}); // => true

const xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
// @dts-jest:skip { x: number, y: number }[]
R.filter(R.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
// @dts-jest:skip { x: number, y: number }[]
R.filter(R.where({x: 10}))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
