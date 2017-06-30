import * as R_pick from '../ramda/dist/src/pick';

declare const object: object;
declare const string: string;

// @dts-jest:pass -> object
R_pick([string])(object);
// @dts-jest:pass -> object
R_pick([string], object);

// @dts-jest:pass -> Record<string, string>
R_pick([string])<Record<string, string>>(object);
// @dts-jest:pass -> Record<string, string>
R_pick<Record<string, string>>([string], object);
