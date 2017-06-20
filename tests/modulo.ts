import * as R_modulo from 'ramda/src/modulo';

declare const number: number;

// @dts-jest:pass
R_modulo(number, number);
// @dts-jest:pass
R_modulo(number)(number);
