import * as R_ifElse from '../ramda/dist/src/ifElse';

declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;
declare const string_to_object: (x: string) => object;

// @dts-jest:pass -> <V, T$1 extends string = string>(onFalse: (value: T$1) => V) => (value: T$1) => number | V
R_ifElse(string_to_boolean, string_to_number);
// @dts-jest:pass -> (value: string) => number | object
R_ifElse(string_to_boolean, string_to_number, string_to_object);
// @dts-jest:pass -> (value: string) => number | object
R_ifElse(string_to_boolean)(string_to_number)(string_to_object);
