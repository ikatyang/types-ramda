import * as R from 'ramda';

let alice = {
  name: 'ALICE',
  age: 101
};
let favorite = R.prop('favoriteLibrary');
let favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

// @dts-jest:skip undefined
favorite(alice);  // => undefined
// @dts-jest:skip string
favoriteWithDefault(alice);  // => 'Ramda'
