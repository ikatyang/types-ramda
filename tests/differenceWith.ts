import * as R from 'ramda';

function cmp(x: any, y: any) { return x.a === y.a; }
const l1 = [{a: 1}, {a: 2}, {a: 3}];
const l2 = [{a: 3}, {a: 4}];
// @dts-jest:skip {a: number}[]
R.differenceWith(cmp, l1, l2); // => [{a: 1}, {a: 2}]
// @dts-jest:skip {a: number}[]
R.differenceWith(cmp)(l1, l2); // => [{a: 1}, {a: 2}]
// @dts-jest:skip {a: number}[]
R.differenceWith(cmp)(l1)(l2); // => [{a: 1}, {a: 2}]
