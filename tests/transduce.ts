import * as R from 'ramda';

let numbers = [1, 2, 3, 4];
let transducer = R.compose(R.map(R.add(1)), R.take(2));
let fn = R.flip<number, number[], number[]>(R.append);
// @dts-jest:skip number[]
R.transduce(transducer, fn, [] as number[], numbers); // => [2, 3]   // strictNullChecks: must annotate empty array type
// @dts-jest:skip number[]
R.transduce(transducer, fn, [] as number[])(numbers); // => [2, 3]
// @dts-jest:skip number[]
R.transduce(transducer, fn)([] as number[], numbers); // => [2, 3]
// @dts-jest:skip number[]
R.transduce(transducer)(fn, [] as number[], numbers); // => [2, 3]
