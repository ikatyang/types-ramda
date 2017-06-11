import * as R from 'ramda';

// @dts-jest
R.uniq([1, 1, 2, 1]); // => [1, 2]
// @dts-jest:skip Object[]
R.uniq([{}, {}]);     // => [{}, {}]
// @dts-jest:skip any[]
R.uniq([1, '1']);     // => [1, '1']
