import * as R_zipObj from 'ramda/src/zipObj';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest
R_zipObj(number_array);
// @dts-jest
R_zipObj(number_array)(string_array);
// @dts-jest
R_zipObj(number_array, string_array);

// @dts-jest
R_zipObj(['a', 'b']);
// @dts-jest
R_zipObj(['a', 'b'])(number_array);
// @dts-jest
R_zipObj(['a', 'b'], number_array);
