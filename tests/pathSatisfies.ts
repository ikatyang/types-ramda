import {Path} from 'ramda/src/$types';
import * as R_pathSatisfies from 'ramda/src/pathSatisfies';

declare const string_to_boolean: (x: string) => boolean;
declare const path: Path;
declare const object: object;

// @dts-jest
R_pathSatisfies(string_to_boolean, path);
// @dts-jest
R_pathSatisfies(string_to_boolean)(path)(object);
// @dts-jest
R_pathSatisfies(string_to_boolean, path, object);
