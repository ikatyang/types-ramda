import * as R from 'ramda';

const double = (x: number): number => x + x;
const arrayify = <T>(v: T): T[] => [v];
// homogeneous array
// @dts-jest:skip number[]
R.map(double, [1, 2, 3]); // => [2, 4, 6]
// @dts-jest:skip number[]
R.map(double)([1, 2, 3]); // => [2, 4, 6]
// homogeneous object
// @dts-jest:skip Dictionary<number>
R.map(double, {a: 1, b: 2, c: 3}); // => { a: 2, b: 4, c: 6 }
// @dts-jest:skip Dictionary<number>
R.map(double)({a: 1, b: 2, c: 3}); // => { a: 2, b: 4, c: 6 }
// heterogeneous array
// @dts-jest:skip [number[], string[]]
R.map(arrayify, [1, 'a']); // => [[1], ['a']]
// @dts-jest:skip [number[], string[]]
R.map(arrayify)([1, 'a']); // => [[1], ['a']]
// heterogeneous object
// @dts-jest:skip { a: number[], b: string[] }
R.map(arrayify, {a: 1, b: 'c'}); // => { a: [1], b: ['c'] }
// @dts-jest:skip { a: number[], b: string[] }
R.map(arrayify)({a: 1, b: 'c'}); // => { a: [1], b: ['c'] }

// functor
// I'm sorry, I have no clue how to make this example work with proper functor typing
// const stringFunctor = {
//     map: (fn: (c: number) => number) => {
//         let chars = 'Ifmmp!Xpsme'.split('');
//         return chars.map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join('');
//     }
// };
// let s = R.map((x: number) => x-1, stringFunctor); // => 'Hello World'
