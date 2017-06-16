import * as R_indexBy from 'ramda/src/indexBy';

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest
R_indexBy(object_to_string);
// @dts-jest
R_indexBy(object_to_string)(object_array);
// @dts-jest
R_indexBy(object_to_string, object_array);
