import * as R from 'ramda';

{
  let isPositive = function(n: number) {
      return n > 0;
  };
  // @dts-jest:skip Dictionary<number>
  R.pickBy(isPositive, {a: 1, b: 2, c: -1, d: 0, e: 5}); // => {a: 1, b: 2, e: 5}
  let containsBackground = function(val: any) {
      return val.bgcolor;
  };
  let colors = {1: {color: 'read'}, 2: {color: 'black', bgcolor: 'yellow'}};
  // @dts-jest:skip { 2: R.Dictionary<string> }
  R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}
  
  let isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; };
  // @dts-jest:skip Dictionary<number>
  R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
}

{
  let isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; };
  // @dts-jest:skip Dictionary<number>
  R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
}
