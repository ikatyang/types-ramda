import * as R from 'ramda';

// @dts-jest
R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
// @dts-jest
R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
// @dts-jest
R.partition((x: number) => x > 2, [1, 2, 3, 4]);
// @dts-jest
R.partition((x: number) => x > 2)([1, 2, 3, 4]);
// @dts-jest:skip Object[]
R.partition(R.contains('s'),{ a: 'sss', b: 'ttt', foo: 'bars' }); // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
