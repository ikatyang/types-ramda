import * as R from 'ramda';

// @dts-jest
R.replace('foo', 'bar', 'foo foo foo'); // => 'bar foo foo'
// @dts-jest
R.replace('foo', 'bar')('foo foo foo'); // => 'bar foo foo'
// @dts-jest
R.replace('foo')('bar')('foo foo foo'); // => 'bar foo foo'
// @dts-jest
R.replace(/foo/, 'bar', 'foo foo foo'); // => 'bar foo foo'

// Use the 'g' (global) flag to replace all occurrences:
// @dts-jest
R.replace(/foo/g, 'bar', 'foo foo foo'); // => 'bar bar bar'
// @dts-jest
R.replace(/foo/g, 'bar')('foo foo foo'); // => 'bar bar bar'
// @dts-jest
R.replace(/foo/g)('bar')('foo foo foo'); // => 'bar bar bar'
