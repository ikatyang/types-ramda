import * as R_insert from '../ramda/dist/src/insert';

declare const object: object;
declare const object_array: object[];
declare const string: string;
declare const number: number;

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => T$1[]
R_insert(number, string);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insert(number, string, object_array);
// @dts-jest:fail -> Argument of type 'object[]' is not assignable to parameter of type 'List<string>'.
R_insert(number)(string)(object_array);

// @dts-jest:pass -> <T$1 extends object = object>(list: T$1[] | ArrayLike<T$1>) => T$1[]
R_insert(number, object);
// @dts-jest:pass -> object[]
R_insert(number, object, object_array);
// @dts-jest:pass -> object[]
R_insert(number)(object)(object_array);
