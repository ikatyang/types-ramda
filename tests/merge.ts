import * as R from 'ramda';

// @dts-jest:skip Dictionary<any>
R.merge({name: 'fred', age: 10}, {age: 40});
// => { 'name': 'fred', 'age': 40 }
const resetToDefault = R.flip(R.merge)({x: 0});
// @dts-jest:skip Dictionary<number>
resetToDefault({x: 5, y: 2}); // => {x: 0, y: 2}
