import {Functor, Morphism} from 'ramda/src/$types';
import * as R_map from 'ramda/src/map';

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const string_object: Record<string, string>;
declare const string_functor: Functor<string>;

// @dts-jest
R_map(string_to_number, string_array);
// @dts-jest
R_map(string_to_number)(string_array);

// @dts-jest
R_map(string_to_number, string_object);
// @dts-jest
R_map(string_to_number)(string_object);

// @dts-jest
R_map(string_to_number, string_functor);
// @dts-jest
R_map(string_to_number)(string_functor);
