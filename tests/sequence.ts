import {Applicative, Traversable} from 'ramda/src/$types';
import * as R_sequence from 'ramda/src/sequence';

declare const any_applicative: Applicative<any>;
declare const number_applicative: Applicative<number>;
declare const any_applicative_traverable: Traversable<Applicative<any>>;

// @dts-jest
R_sequence(number_applicative.of, [number_applicative]);
// @dts-jest
R_sequence(any_applicative.of, [any_applicative]);
// @dts-jest
R_sequence<number>(any_applicative.of, [any_applicative]);

// @dts-jest
R_sequence(number_applicative.of, any_applicative_traverable);
// @dts-jest
R_sequence(any_applicative.of, any_applicative_traverable);
// @dts-jest
R_sequence<number>(any_applicative.of, any_applicative_traverable);
