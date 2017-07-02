import * as R_dropRepeatsWith from '../ramda/dist/src/dropRepeatsWith';

declare const string_to_number: (x: string) => number;
declare const string_array: string[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => T$1[]
R_dropRepeatsWith(string_to_number);
// @dts-jest:pass -> string[]
R_dropRepeatsWith(string_to_number)(string_array);
// @dts-jest:pass -> string[]
R_dropRepeatsWith(string_to_number, string_array);
