import * as R_update from '../ramda/dist/src/update';

declare const string_array: string[];
declare const boolean: boolean;
declare const string: string;
declare const number: number;

// @dts-jest:pass -> (list: boolean[] | ArrayLike<boolean>) => boolean[]
R_update(number, boolean);
// @dts-jest:fail -> Argument of type 'string[]' is not assignable to parameter of type 'List<boolean>'.
R_update(number)(boolean)(string_array);
// @dts-jest:fail -> Argument of type 'string[]' is not assignable to parameter of type 'List<boolean>'.
R_update(number, boolean, string_array);
// @dts-jest:pass -> string[]
R_update(number)(string)(string_array);
// @dts-jest:pass -> string[]
R_update(number, string, string_array);
