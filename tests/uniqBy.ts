import * as R_uniqBy from 'ramda/src/uniqBy';

declare const number_to_object: (x: number) => object;
declare const number_array: number[];
declare const string_to_any: (x: string) => any;
declare const string_array: string[];

// @dts-jest
R_uniqBy(number_to_object);
// @dts-jest
R_uniqBy(number_to_object)(number_array);
// @dts-jest
R_uniqBy(number_to_object, number_array);

// @dts-jest
R_uniqBy(string_to_any);
// @dts-jest
R_uniqBy(string_to_any)(string_array);
// @dts-jest
R_uniqBy(string_to_any, string_array);
