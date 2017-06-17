import * as R_tap from 'ramda/src/tap';

declare const string_to_void: (x: string) => void;
declare const string: string;

// @dts-jest
R_tap(string_to_void);
// @dts-jest
R_tap(string_to_void, string);
