import * as R from 'ramda';

{
  const f = {x: 'X', y: 'Y'};
  // @dts-jest
  R.keysIn(f); // => ['x', 'y']
}

{
  const f = {x: 'X', y: 'Y'};
  // @dts-jest
  R.keysIn(f); // => ['x', 'y']
}
