import * as R from 'ramda';

const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
const sortByAgeDescending = R.sortBy(R.compose(R.negate, R.prop('age')));
const sortByAgeAscending = R.sortBy(R.prop('age'));
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
// @dts-jest:skip { name: string, age: number }[]
sortByAgeDescending(people); // => [alice, bob, clara]
// @dts-jest:skip { name: string, age: number }[]
sortByNameCaseInsensitive(people); // => [alice, bob, clara]
// @dts-jest:skip { name: string, age: number }[]
sortByAgeAscending(people); // => [bob, alice, clara]
