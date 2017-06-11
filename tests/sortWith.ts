import * as R from 'ramda';

const alice = {
  name: 'alice',
  age: 40,
};
const bob = {
  name: 'bob',
  age: 30,
};
const clara = {
  name: 'clara',
  age: 40,
};
const people = [clara, bob, alice];
// @dts-jest:skip typeof people
R.sortWith(
  [
    R.descend(R.prop('age')),
    R.ascend(R.prop('name')),
  ],
  people,
);
const ageNameSort = R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name')),
]);
// @dts-jest:skip typeof people
ageNameSort(people);
// => [alice, clara, bob]
