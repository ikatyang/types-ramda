import * as R_objOf from 'ramda/src/objOf';

declare const string: string;
declare const object: object;

// @dts-jest
R_objOf(string);
// @dts-jest
R_objOf(string, object);
// @dts-jest
R_objOf('key');
// @dts-jest
R_objOf('key', object);
