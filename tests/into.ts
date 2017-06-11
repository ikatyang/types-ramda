import * as R from 'ramda';

let numbers = [1, 2, 3, 4];
let a  = R.map(R.add(1), R.take(2, numbers));
let b = R.take(2);
let transducer = R.compose(R.map(R.add(1)), R.take(2));


// @dts-jest:skip number[]
R.into([], transducer, numbers); // => [2, 3]
// @dts-jest:skip number[]
R.into([])(transducer, numbers); // => [2, 3]
// @dts-jest:skip number[]
R.into([], transducer)(numbers); // => [2, 3]

let intoArray = R.into([]);
// @dts-jest:skip number[]
intoArray(transducer, numbers); // => [2, 3]
// @dts-jest:skip number[]
intoArray(transducer)(numbers); // => [2, 3]
