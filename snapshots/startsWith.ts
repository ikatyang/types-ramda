import * as R_startsWith from '../ramda/dist/src/startsWith';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1) => boolean
R_startsWith(string);
// @dts-jest:pass -> boolean
R_startsWith(string, string);
// @dts-jest:pass -> <T$1 extends boolean[] = boolean[]>(list: T$1) => boolean
R_startsWith(boolean_array);
// @dts-jest:pass -> boolean
R_startsWith(boolean_array, boolean_array);
