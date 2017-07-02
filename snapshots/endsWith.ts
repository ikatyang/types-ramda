import * as R_endsWith from '../ramda/dist/src/endsWith';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1) => boolean
R_endsWith(string);
// @dts-jest:pass -> boolean
R_endsWith(string, string);
// @dts-jest:pass -> <T$1 extends boolean[] = boolean[]>(list: T$1) => boolean
R_endsWith(boolean_array);
// @dts-jest:pass -> boolean
R_endsWith(boolean_array, boolean_array);
