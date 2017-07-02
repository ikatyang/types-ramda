import * as R_indexOf from '../ramda/dist/src/indexOf';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => number
R_indexOf(string);
// @dts-jest:pass -> number
R_indexOf(string, string);
// @dts-jest:pass -> number
R_indexOf(string, string_array);
