import * as R from 'ramda';

class Why {
  val: boolean;
  constructor(val: boolean) {
      this.val = val;
  }
  or(x: boolean) {
      return this.val && x;
  }
}

// @dts-jest
R.or(false, true); // => false
// @dts-jest:skip number|any[]
R.or(0, []); // => []
// @dts-jest:skip number|any[]
R.or(0)([]); // => []
// @dts-jest:skip string
R.or(null, ''); // => ''

let why = new Why(true);
why.or(true);
// @dts-jest:skip Why|boolean
R.or(why, false); // false
