import { Chain, List } from '../ramda/dist/src/$types';
import * as R_chain from '../ramda/dist/src/chain';

declare const number_array: number[];
declare const number_to_string_string_tuple: (x: number) => [string, string];
declare const number_chain: Chain<number>;
declare const number_chain_to_string_chain: (x: number) => Chain<string>;
declare const string_to_number_list_to_object: (
  x: string,
) => (list: List<number>) => object;
declare const number_list_to_string: (list: List<number>) => string;

// @dts-jest:pass -> (list: List<number>) => string[]
R_chain(number_to_string_string_tuple);
// @dts-jest:pass -> string[]
R_chain(number_to_string_string_tuple)(number_array);
// @dts-jest:pass -> string[]
R_chain(number_to_string_string_tuple, number_array);

// @dts-jest:pass -> (list: Chain<number>) => Chain<string>
R_chain(number_chain_to_string_chain);
// @dts-jest:pass -> Chain<string>
R_chain(number_chain_to_string_chain)(number_chain);
// @dts-jest:pass -> Chain<string>
R_chain(number_chain_to_string_chain, number_chain);

// @dts-jest:pass -> (monad: (value: List<number>) => string) => (value: List<number>) => object
R_chain(string_to_number_list_to_object);
// @dts-jest:pass -> (value: List<number>) => object
R_chain(string_to_number_list_to_object)(number_list_to_string);
// @dts-jest:pass -> (value: List<number>) => object
R_chain(string_to_number_list_to_object, number_list_to_string);
