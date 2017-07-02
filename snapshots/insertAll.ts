import * as R_insertAll from '../ramda/dist/src/insertAll';

declare const object_array: object[];
declare const string_array: string[];
declare const number: number;

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => string[]
R_insertAll(number, string_array);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insertAll(number, string_array, object_array);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insertAll(number)(string_array)(object_array);
// @dts-jest:pass -> string[]
R_insertAll(number, string_array, string_array);
// @dts-jest:pass -> string[]
R_insertAll(number)(string_array)(string_array);
