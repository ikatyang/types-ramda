import {Morphism} from '../ramda/dist/src/$types';
import * as R_cond from '../ramda/dist/src/cond';

declare const string_to_boolean: Morphism<string, boolean>;
declare const string_to_number: Morphism<string, number>;

// @dts-jest:pass
R_cond([
  [string_to_boolean, string_to_number],
  [string_to_boolean, string_to_number],
]);
