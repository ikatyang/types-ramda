import * as R_maxBy from 'ramda/src/maxBy';

declare const object_to_number: (x: object) => number;
declare const object: object;

// @dts-jest
R_maxBy(object_to_number, object);
// @dts-jest
R_maxBy(object_to_number)(object)(object);
// @dts-jest
R_maxBy(object_to_number, object, object);
