import {Dictionary, Morphism, NestedDictionary} from '../ramda/dist/src/$types';
import * as R_evolve from '../ramda/dist/src/evolve';

declare const nested_string_to_number: NestedDictionary<Morphism<string, number>>;
declare const nested_string_dictionary: Dictionary<string>;

// @dts-jest:pass
R_evolve(nested_string_to_number)(nested_string_dictionary);
// @dts-jest:pass
R_evolve(nested_string_to_number, nested_string_dictionary);

// @dts-jest:pass
R_evolve(nested_string_to_number)<Dictionary<number>>(nested_string_dictionary);
// @dts-jest:pass
R_evolve<Dictionary<number>>(nested_string_to_number, nested_string_dictionary);
