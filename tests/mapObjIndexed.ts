import * as R from 'ramda';

let values = { x: 1, y: 2, z: 3 };
let prependKeyAndDouble = function(num: number, key: string, obj: any) {
    return key + (num * 2);
};
// @dts-jest:skip Dictionary<string>
R.mapObjIndexed(prependKeyAndDouble, values); // => { x: 'x2', y: 'y4', z: 'z6' }
