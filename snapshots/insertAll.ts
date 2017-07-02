import * as R_insertAll from '../ramda/dist/src/insertAll';

declare const object_array: object[];
declare const string_array: string[];
declare const number: number;

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => T$1[]
R_insertAll(number, string_array);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insertAll(number, string_array, object_array);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insertAll(number)(string_array)(object_array);
// @dts-jest:pass -> string[]
R_insertAll(number, string_array, string_array);
// @dts-jest:pass -> string[]
R_insertAll(number)(string_array)(string_array);
