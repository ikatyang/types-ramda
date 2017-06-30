import * as R_dissoc from '../ramda/dist/src/dissoc';

declare const string_property: string;
declare const object: object;

// @dts-jest:pass -> object
R_dissoc(string_property, object);
// @dts-jest:pass -> object
R_dissoc(string_property)(object);

// @dts-jest:pass -> string
R_dissoc<string>(string_property, object);
// @dts-jest:pass -> string
R_dissoc(string_property)<string>(object);
