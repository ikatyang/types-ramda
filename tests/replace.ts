import * as R from 'ramda';

// @dts-jest
R.replace(R.__, 'bar');

// @dts-jest
R.replace('foo', 'bar');

// @dts-jest
R.replace('foo')('bar');

// @dts-jest
R.replace(/foo/, 'bar', 'foo foo foo');
