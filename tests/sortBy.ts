import * as R from 'ramda';

let sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
let sortByAgeDescending = R.sortBy(R.compose(R.negate, R.prop('age')));
let sortByAgeAscending = R.sortBy(R.prop('age'));
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
// @dts-jest:skip { name: string, age: number }[]
sortByAgeDescending(people); //=> [alice, bob, clara]
// @dts-jest:skip { name: string, age: number }[]
sortByNameCaseInsensitive(people); // => [alice, bob, clara]
// @dts-jest:skip { name: string, age: number }[]
sortByAgeAscending(people); // => [bob, alice, clara]
