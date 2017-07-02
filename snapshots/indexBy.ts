import * as R_indexBy from '../ramda/dist/src/indexBy';

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest:pass -> <T$1 extends object = object>(list: T$1[] | ArrayLike<T$1>) => Dictionary<T$1>
R_indexBy(object_to_string);
// @dts-jest:pass -> Dictionary<object>
R_indexBy(object_to_string)(object_array);
// @dts-jest:pass -> Dictionary<object>
R_indexBy(object_to_string, object_array);
