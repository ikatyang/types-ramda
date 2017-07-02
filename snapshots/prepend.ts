import * as R_prepend from '../ramda/dist/src/prepend';

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:fail -> Argument of type 'number[]' is not assignable to parameter of type 'List<string>'.
R_prepend(string)(number_array);
// @dts-jest:fail -> Argument of type 'number[]' is not assignable to parameter of type 'List<string>'.
R_prepend(string, number_array);
// @dts-jest:pass -> number[]
R_prepend(number)(number_array);
// @dts-jest:pass -> number[]
R_prepend(number, number_array);
