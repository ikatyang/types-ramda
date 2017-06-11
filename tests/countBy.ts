import * as R from 'ramda';

let numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
let letters = R.split('', 'abcABCaaaBBc');
// @dts-jest:skip Dictionary<number>
R.countBy(Math.floor)(numbers);    // => {'1': 3, '2': 2, '3': 1}
// @dts-jest:skip Dictionary<number>
R.countBy(R.toLower)(letters);   // => {'a': 5, 'b': 4, 'c': 3}
