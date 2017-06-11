import * as R from 'ramda';

function cmp(obj: { x: number }) { return obj.x; }
const a = {x: 1};
const b = {x: 2};
const c = {x: 3};
const d = {x: 'a'};
const e = {x: 'z'};
// @dts-jest
R.maxBy(cmp, a, c); // => {x: 3}
// @dts-jest
R.maxBy(cmp)(a, c); // => {x: 3}
// @dts-jest
R.maxBy(cmp)(a)(b);
// @dts-jest:skip Argument of type '{ x: string; }' is not assignable to parameter of type '{ x: number; }'
R.maxBy(cmp)(d)(e);
