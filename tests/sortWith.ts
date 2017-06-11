import * as R from 'ramda';

let alice = {
  name: 'alice',
  age: 40
};
let bob = {
  name: 'bob',
  age: 30
};
let clara = {
  name: 'clara',
  age: 40
};
let people = [clara, bob, alice];
// @dts-jest:skip typeof people
R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name'))
], people);
let ageNameSort = R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name'))
]);
// @dts-jest:skip typeof people
ageNameSort(people);
// => [alice, clara, bob]
