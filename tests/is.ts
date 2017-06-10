import * as R from 'ramda';

// @dts-jest
R.is(Object, {}); // => true
// @dts-jest
R.is(Object)({}); // => true
// @dts-jest
R.is(Number, 1); // => true
// @dts-jest
R.is(Number)(1); // => true
// @dts-jest
R.is(Object, 1); // => false
// @dts-jest
R.is(Object)(1); // => false
// @dts-jest
R.is(String, 's'); // => true
// @dts-jest
R.is(String)('s'); // => true
// @dts-jest
R.is(String, ''); // => true
// @dts-jest
R.is(String)(''); // => true
// @dts-jest
R.is(Object, new Object()); // => true
// @dts-jest
R.is(Object)(new Object()); // => true
// @dts-jest
R.is(Object, 's'); // => false
// @dts-jest
R.is(Object)('s'); // => false
// @dts-jest
R.is(Number, {}); // => false
// @dts-jest
R.is(Number)({}); // => false
