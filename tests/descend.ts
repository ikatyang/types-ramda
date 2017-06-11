import * as R from 'ramda';

let byAge = R.descend(R.prop('age'));
let alice = {
  name: 'ALICE',
  age: 101
};
let bob = {
  name: 'Bob',
  age: -10
};
let clara = {
  name: 'clara',
  age: 314.159
};
let people = [clara, bob, alice];
// @dts-jest:skip typeof people
R.sort(byAge, people);
