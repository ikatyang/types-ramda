import {Lens} from '../ramda/dist/src/$types';
import * as R_over from '../ramda/dist/src/over';

declare const number_object_lens: Lens<number, object>;
declare const number_to_number: (x: number) => number;
declare const object: object;

// @dts-jest:pass
R_over(number_object_lens, number_to_number);
// @dts-jest:pass
R_over(number_object_lens)(number_to_number)(object);
// @dts-jest:pass
R_over(number_object_lens, number_to_number, object);
