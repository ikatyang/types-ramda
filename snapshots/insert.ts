import * as R_insert from '../ramda/dist/src/insert';

declare const object: object;
declare const object_array: object[];
declare const string: string;
declare const number: number;

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => string[]
R_insert(number, string);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insert(number, string, object_array);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insert(number)(string)(object_array);

// @dts-jest:pass -> (list: object[] | ArrayLike<object>) => object[]
R_insert(number, object);
// @dts-jest:pass -> object[]
R_insert(number, object, object_array);
// @dts-jest:pass -> object[]
R_insert(number)(object)(object_array);
