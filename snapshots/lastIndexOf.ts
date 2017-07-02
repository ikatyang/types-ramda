import * as R_lastIndexOf from '../ramda/dist/src/lastIndexOf';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => number
R_lastIndexOf(string);
// @dts-jest:pass -> number
R_lastIndexOf(string, string);
// @dts-jest:pass -> number
R_lastIndexOf(string, string_array);
