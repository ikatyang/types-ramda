import * as R_defaultTo from 'ramda/src/defaultTo';

declare const string: string;
declare const number_or_undefined: number | undefined;

// @dts-jest
R_defaultTo(number_or_undefined);
// @dts-jest
R_defaultTo(number_or_undefined, string);
