import * as R from 'ramda';

// @dts-jest
R.replace('foo', 'bar', 'foo foo foo');

// @dts-jest
R.replace('foo', 'bar')('foo foo foo');

// @dts-jest
R.replace('foo')('bar')('foo foo foo');

// @dts-jest
R.replace(/foo/, 'bar', 'foo foo foo');

// @dts-jest
R.replace(/foo/g, 'bar', 'foo foo foo');

// @dts-jest
R.replace(/foo/g, 'bar')('foo foo foo');

// @dts-jest
R.replace(/foo/g)('bar')('foo foo foo');
