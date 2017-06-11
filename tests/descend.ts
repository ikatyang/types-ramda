import * as R from 'ramda';

const byAge = R.descend(R.prop('age'));
const alice = {
  name: 'ALICE',
  age: 101,
};
const bob = {
  name: 'Bob',
  age: -10,
};
const clara = {
  name: 'clara',
  age: 314.159,
};
const people = [clara, bob, alice];
// @dts-jest:skip typeof people
R.sort(byAge, people);
