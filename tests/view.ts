import {Lens} from '../ramda/dist/src/$types';
import * as R_view from '../ramda/dist/src/view';

declare const number_object_lens: Lens<number, object>;
declare const object: object;

// @dts-jest:pass
R_view(number_object_lens);
// @dts-jest:pass
R_view(number_object_lens)(object);
// @dts-jest:pass
R_view(number_object_lens, object);
