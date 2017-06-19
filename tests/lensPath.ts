import {Path} from 'ramda/src/$types';
import * as R_lensPath from 'ramda/src/lensPath';

declare const path: Path;

// @dts-jest
R_lensPath(path);
// @dts-jest
R_lensPath<object, number[]>(path);
