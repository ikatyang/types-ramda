import * as R_pick from 'ramda/src/pick';

declare const object: object;
declare const string: string;

// @dts-jest
R_pick([string])(object);
// @dts-jest
R_pick([string], object);

// @dts-jest
R_pick([string])<Record<string, string>>(object);
// @dts-jest
R_pick<Record<string, string>>([string], object);
