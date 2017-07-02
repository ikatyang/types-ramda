import * as R_contains from '../ramda/dist/src/contains';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => boolean
R_contains(string);
// @dts-jest:pass -> boolean
R_contains(string, string);
// @dts-jest:pass -> boolean
R_contains(string, string_array);
