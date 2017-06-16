import {Path} from 'ramda/src/$types';
import * as R_pathEq from 'ramda/src/pathEq';

declare const path: Path;
declare const number: number;
declare const object: object;

// @dts-jest
R_pathEq(path, number);
// @dts-jest
R_pathEq(path)(number)(object);
// @dts-jest
R_pathEq(path, number, object);
