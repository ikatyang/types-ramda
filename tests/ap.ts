import {Morphism} from 'ramda/src/$types';
import * as R_ap from 'ramda/src/ap';

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];

// @dts-jest:pass
R_ap([string_to_number])(string_array);
// @dts-jest:pass
R_ap([string_to_number], string_array);
