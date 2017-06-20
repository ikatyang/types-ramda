import * as R_union from 'ramda/src/union';

declare const number_array: number[];

// @dts-jest:pass
R_union(number_array);
// @dts-jest:pass
R_union(number_array, number_array);
