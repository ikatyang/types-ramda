import {Morphism} from 'ramda/src/$types';
import * as R_cond from 'ramda/src/cond';

declare const string_to_boolean: Morphism<string, boolean>;
declare const string_to_number: Morphism<string, number>;

// @dts-jest
R_cond([
  [string_to_boolean, string_to_number],
  [string_to_boolean, string_to_number],
]);
