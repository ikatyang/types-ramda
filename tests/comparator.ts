import * as R from 'ramda';

type T = {age: number};
let cmp = R.comparator(function(a: T, b: T) {
  return a.age < b.age;
});
let people = [
  {name: 'Agy', age: 33}, {name: 'Bib', age: 15}, {name: 'Cari', age: 16}
];
// @dts-jest:skip { age: number, name: string }[]
R.sort(cmp, people);
