import {Applicative, Traversable} from 'ramda/src/$types';
import * as R_traverse from 'ramda/src/traverse';

declare const number_array: number[];
declare const number_applicative: Applicative<number>;
declare const number_traverable: Traversable<number>;
declare const number_to_string_applicative: (x: number) => Applicative<string>;

// @dts-jest
R_traverse(number_applicative.of, number_to_string_applicative, number_array);
// @dts-jest
R_traverse(number_applicative.of)(number_to_string_applicative)(number_array);
// @dts-jest
R_traverse(number_applicative.of, number_to_string_applicative, number_traverable);
// @dts-jest
R_traverse(number_applicative.of)(number_to_string_applicative)(number_traverable);
