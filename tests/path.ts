import {Path} from 'ramda/src/$types';
import * as R_path from 'ramda/src/path';

declare const path: Path;
declare const object: object;

// @dts-jest:pass
R_path(path);

// @dts-jest:pass
R_path(path)(object);
// @dts-jest:pass
R_path(path, object);

// @dts-jest:pass
R_path(path)<number>(object);
// @dts-jest:pass
R_path<number>(path, object);
