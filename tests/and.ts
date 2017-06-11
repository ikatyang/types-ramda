import * as R from 'ramda';

// @dts-jest
R.and(false, true); // => false
// @dts-jest:skip number
R.and(0, []); // => 0
// @dts-jest:skip number
R.and(0)([]); // => 0
// @dts-jest:skip null
R.and(null, ''); // => null

// tslint:disable

const Why: any = (function (val: boolean) {
  let why: any;
  why.val = val;
  why.and = function (x: boolean) {
    return this.val && x;
  };
  return Why;
})(true);
const why = new Why(true);
// @dts-jest:skip boolean
R.and(why, false); // false
