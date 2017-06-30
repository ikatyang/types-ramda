import {Path} from '../ramda/dist/src/$types';
import * as R_lensPath from '../ramda/dist/src/lensPath';

declare const path: Path;

// @dts-jest:pass -> Lens<{}, {}>
R_lensPath(path);
// @dts-jest:pass -> Lens<object, number[]>
R_lensPath<object, number[]>(path);
