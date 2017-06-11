import * as R from 'ramda';

const strEq = (a: any, b: any) => String(a) === String(b);
// @dts-jest:skip number[]
R.uniqWith(strEq, [1, '1', 2, 1]); // => [1, 2]
// @dts-jest:skip number[]
R.uniqWith(strEq)([1, '1', 2, 1]); // => [1, 2]
// @dts-jest:skip Object[]
R.uniqWith(strEq)([{}, {}]);       // => [{}]
// @dts-jest:skip number[]
R.uniqWith(strEq)([1, '1', 1]);    // => [1]
// @dts-jest:skip string[]
R.uniqWith(strEq)(['1', 1, 1]);    // => ['1']
