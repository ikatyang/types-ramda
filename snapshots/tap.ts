import * as R_tap from '../ramda/dist/src/tap';

declare const string_to_void: (x: string) => void;
declare const string: string;

// @dts-jest:pass -> <T$1 extends string = string>(value: T$1) => T$1
R_tap(string_to_void);
// @dts-jest:pass -> string
R_tap(string_to_void, string);
