import * as R_minBy from 'ramda/src/minBy';

declare const object_to_number: (x: object) => number;
declare const object: object;

// @dts-jest
R_minBy(object_to_number, object);
// @dts-jest
R_minBy(object_to_number)(object)(object);
// @dts-jest
R_minBy(object_to_number, object, object);
