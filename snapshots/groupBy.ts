import * as R_groupBy from '../ramda/dist/src/groupBy';

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest:pass -> <T$1 extends object = object>(list: T$1[] | ArrayLike<T$1>) => Dictionary<T$1[]>
R_groupBy(object_to_string);
// @dts-jest:pass -> Dictionary<object[]>
R_groupBy(object_to_string)(object_array);
// @dts-jest:pass -> Dictionary<object[]>
R_groupBy(object_to_string, object_array);
