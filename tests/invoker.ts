import * as R from 'ramda';

// @dts-jest:skip string
R.invoker(0, 'toUpperCase', 'foo');
// @dts-jest:skip string
R.invoker(1, 'charAt', 'foo', 1);
