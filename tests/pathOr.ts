import {Path} from 'ramda/src/$types';
import * as R_pathOr from 'ramda/src/pathOr';

declare const path: Path;
declare const number: number;
declare const object: object;

// @dts-jest
R_pathOr(number, path);

// @dts-jest
R_pathOr(number)(path)(object);
// @dts-jest
R_pathOr(number, path, object);

// @dts-jest
R_pathOr(number)(path)<string>(object);
// @dts-jest
R_pathOr<number, string>(number, path, object);
