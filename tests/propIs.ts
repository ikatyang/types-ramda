import * as R_propIs from 'ramda/src/propIs';

declare const string: string;
declare const object: object;

// @dts-jest
R_propIs(Number)('a');
// @dts-jest
R_propIs(Number, 'a');
// @dts-jest
R_propIs(Number)('a')(object);
// @dts-jest
R_propIs(Number, 'a', object);
