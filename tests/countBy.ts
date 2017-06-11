import * as R from 'ramda';

const numbers = [1, 1.1, 1.2, 2, 3, 2.2];
const letters = R.split('', 'abcABCaaaBBc');
// @dts-jest:skip Dictionary<number>
R.countBy(Math.floor)(numbers);    // => {'1': 3, '2': 2, '3': 1}
// @dts-jest:skip Dictionary<number>
R.countBy(R.toLower)(letters);   // => {'a': 5, 'b': 4, 'c': 3}
