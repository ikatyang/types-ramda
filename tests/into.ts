import * as R from 'ramda';

const numbers = [1, 2, 3, 4];
const transducer = R.compose(R.map(R.add(1)), R.take(2));

// @dts-jest:skip number[]
R.into([], transducer, numbers); // => [2, 3]
// @dts-jest:skip number[]
R.into([])(transducer, numbers); // => [2, 3]
// @dts-jest:skip number[]
R.into([], transducer)(numbers); // => [2, 3]

const intoArray = R.into([]);
// @dts-jest:skip number[]
intoArray(transducer, numbers); // => [2, 3]
// @dts-jest:skip number[]
intoArray(transducer)(numbers); // => [2, 3]
