import * as R from 'ramda';

// @dts-jest:skip number[][]
R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
// [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

// @dts-jest:skip number[][]
R.groupWith((a: number, b: number) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
// [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

const isVowel = (a: string) => R.contains(a, 'aeiou') ? a : '';
// @dts-jest:skip string[]
R.groupWith(R.eqBy<string>(isVowel), 'aestiou');
// ['ae', 'st', 'iou']
