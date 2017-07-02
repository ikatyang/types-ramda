import * as R_append from '../ramda/dist/src/append';

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:fail -> Argument of type 'number[]' is not assignable to parameter of type 'List<string>'.
R_append(string)(number_array);
// @dts-jest:fail -> Argument of type 'number[]' is not assignable to parameter of type 'List<string>'.
R_append(string, number_array);
// @dts-jest:pass -> number[]
R_append(number)(number_array);
// @dts-jest:pass -> number[]
R_append(number, number_array);
