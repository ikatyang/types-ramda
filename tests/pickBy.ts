import * as R from 'ramda';

{
  const isPositive = (n: number) => n > 0;
  // @dts-jest:skip Dictionary<number>
  R.pickBy(isPositive, {a: 1, b: 2, c: -1, d: 0, e: 5}); // => {a: 1, b: 2, e: 5}
  const containsBackground = (val: any) => val.bgcolor;
  const colors = {1: {color: 'read'}, 2: {color: 'black', bgcolor: 'yellow'}};
  // @dts-jest:skip { 2: R.Dictionary<string> }
  R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}

  const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;
  // @dts-jest:skip Dictionary<number>
  R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
}

{
  const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;
  // @dts-jest:skip Dictionary<number>
  R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
}
