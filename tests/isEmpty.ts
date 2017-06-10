import * as R from 'ramda';

// @dts-jest
R.isEmpty([1, 2, 3]); // => false
// @dts-jest
R.isEmpty([]); // => true
// @dts-jest
R.isEmpty(''); // => true
// @dts-jest
R.isEmpty(null); // => false
// @dts-jest
R.isEmpty({}); // =>true
// @dts-jest
R.isEmpty({a: 1}); // => false
