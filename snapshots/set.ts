import {Lens} from '../ramda/dist/src/$types';
import * as R_set from '../ramda/dist/src/set';

declare const number_object_lens: Lens<number, object>;
declare const number: number;
declare const object: object;

// @dts-jest:pass -> (target: object) => object
R_set(number_object_lens, number);
// @dts-jest:pass -> object
R_set(number_object_lens)(number)(object);
// @dts-jest:pass -> object
R_set(number_object_lens, number, object);
