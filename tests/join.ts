import * as R from 'ramda';

const spacer = R.join(' ');
// @dts-jest
spacer(['a', 2, 3.4]);   // => 'a 2 3.4'
// @dts-jest
R.join('|', [1, 2, 3]);    // => '1|2|3'
