import {Lens} from 'ramda/src/$types';
import * as R_set from 'ramda/src/set';

declare const number_object_lens: Lens<number, object>;
declare const number: number;
declare const object: object;

// @dts-jest
R_set(number_object_lens, number);
// @dts-jest
R_set(number_object_lens)(number)(object);
// @dts-jest
R_set(number_object_lens, number, object);
