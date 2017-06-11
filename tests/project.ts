import * as R from 'ramda';

let abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
let fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
let kids = [abby, fred];
// @dts-jest:skip { name: string, grade: number }[]
R.project(['name', 'grade'], kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
