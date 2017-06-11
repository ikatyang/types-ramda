import * as R from 'ramda';

const values = {x: 1, y: 2, z: 3};
const prependKeyAndDouble = (num: number, key: string, obj: any) => `${key}${(num * 2)}`;
// @dts-jest:skip Dictionary<string>
R.mapObjIndexed(prependKeyAndDouble, values); // => { x: 'x2', y: 'y4', z: 'z6' }
