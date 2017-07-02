import * as R_mapAccum from '../ramda/dist/src/mapAccum';

declare const number: number;
declare const number_string_to_number_string_tuple: (x: number, y: string) => [number, string];
declare const string_array: string[];

// @dts-jest:pass -> <T$1 extends string = string>(list: T$1[] | ArrayLike<T$1>) => [number, string[]]
R_mapAccum(number_string_to_number_string_tuple, number);
// @dts-jest:pass -> [number, string[]]
R_mapAccum(number_string_to_number_string_tuple)(number)(string_array);
// @dts-jest:pass -> [number, string[]]
R_mapAccum(number_string_to_number_string_tuple, number, string_array);
