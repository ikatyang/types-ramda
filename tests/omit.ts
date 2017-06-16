import * as R_omit from 'ramda/src/omit';

declare const object: object;
declare const string: string;

// @dts-jest
R_omit([string])(object);
// @dts-jest
R_omit([string], object);

// @dts-jest
R_omit([string])<Record<string, string>>(object);
// @dts-jest
R_omit<Record<string, string>>([string], object);
