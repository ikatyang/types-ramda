import * as R_pickAll from '../ramda/dist/src/pickAll';

declare const object: object;
declare const string: string;

// @dts-jest:pass -> object
R_pickAll([string])(object);
// @dts-jest:pass -> object
R_pickAll([string], object);

// @dts-jest:pass -> Record<string, string>
R_pickAll([string])<Record<string, string>>(object);
// @dts-jest:pass -> Record<string, string>
R_pickAll<Record<string, string>>([string], object);
