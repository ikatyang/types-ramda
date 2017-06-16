import * as R_groupBy from 'ramda/src/groupBy';

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest
R_groupBy(object_to_string);
// @dts-jest
R_groupBy(object_to_string)(object_array);
// @dts-jest
R_groupBy(object_to_string, object_array);
