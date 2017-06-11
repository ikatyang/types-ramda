import * as R from 'ramda';

const alice = {
  name: 'ALICE',
  age: 101,
};
const favorite = R.prop('favoriteLibrary');
const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

// @dts-jest:skip undefined
favorite(alice);  // => undefined
// @dts-jest:skip string
favoriteWithDefault(alice);  // => 'Ramda'
