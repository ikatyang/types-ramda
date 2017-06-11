import * as R from 'ramda';

function cmp(obj: { x: number }) { return obj.x; }
let a = {x: 1};
let b = {x: 2};
let c = {x: 3};
let d = {x: 'a'};
let e = {x: 'z'};
// @dts-jest
R.maxBy(cmp, a, c); // => {x: 3}
// @dts-jest
R.maxBy(cmp)(a, c); // => {x: 3}
// @dts-jest
R.maxBy(cmp)(a)(b);
// @dts-jest:skip Argument of type '{ x: string; }' is not assignable to parameter of type '{ x: number; }'
R.maxBy(cmp)(d)(e);
