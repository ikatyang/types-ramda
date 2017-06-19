import {Lens} from 'ramda/src/$types';
import * as R_view from 'ramda/src/view';

declare const number_object_lens: Lens<number, object>;
declare const object: object;

// @dts-jest
R_view(number_object_lens);
// @dts-jest
R_view(number_object_lens)(object);
// @dts-jest
R_view(number_object_lens, object);
