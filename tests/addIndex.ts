import {ListMapper, Morphism, ObjectMapper} from 'ramda/src/$types';
import * as R_addIndex from 'ramda/src/addIndex';

declare const string_to_number_list_mapper: ListMapper<string, number>;
declare const string_to_number_object_mapper: ObjectMapper<string, number, string>;

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const string_object: Record<string, string>;

// @dts-jest
R_addIndex(string_to_number_list_mapper);
// @dts-jest
R_addIndex(string_to_number_list_mapper)(string_to_number);
// @dts-jest
R_addIndex(string_to_number_list_mapper)(string_to_number, string_array);

// @dts-jest
R_addIndex(string_to_number_object_mapper);
// @dts-jest
R_addIndex(string_to_number_object_mapper)(string_to_number);
// @dts-jest
R_addIndex(string_to_number_object_mapper)(string_to_number, string_object);
