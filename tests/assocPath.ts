import {Path} from 'ramda/src/$types';
import * as R_assocPath from 'ramda/src/assocPath';

declare const path: Path;
declare const number_value: number;
declare const object: object;

// @dts-jest
R_assocPath(path, number_value, object);
// @dts-jest
R_assocPath(path)(number_value)(object);
