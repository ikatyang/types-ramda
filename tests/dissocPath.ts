import {Path} from 'ramda/src/$types';
import * as R_dissocPath from 'ramda/src/dissocPath';

declare const path: Path;
declare const object: object;

// @dts-jest:pass
R_dissocPath(path, object);
// @dts-jest:pass
R_dissocPath(path)(object);

// @dts-jest:pass
R_dissocPath<string>(path, object);
// @dts-jest:pass
R_dissocPath(path)<string>(object);
