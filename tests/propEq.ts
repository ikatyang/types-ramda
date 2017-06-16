import * as R_propEq from 'ramda/src/propEq';

declare const string: string;
declare const object: object;

// @dts-jest
R_propEq(string, string);
// @dts-jest
R_propEq(string)(string)(object);
// @dts-jest
R_propEq(string, string, object);
