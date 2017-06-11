import * as R from 'ramda';

let list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
// @dts-jest:skip Dictionary<Object>
R.indexBy(R.prop('id'), list);
// @dts-jest:skip Dictionary<Object>
R.indexBy(R.prop('id'))(list);
// @dts-jest:skip Dictionary<Object>
R.indexBy<{id: string}>(R.prop('id'))(list);
