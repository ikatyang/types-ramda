import * as R from 'ramda';

{
  let f = {x: 'X', y: 'Y'};
  // @dts-jest
  R.keysIn(f); // => ['x', 'y']
}

{
  let f = {x: 'X', y: 'Y'};
  // @dts-jest
  R.keysIn(f); // => ['x', 'y']
}
