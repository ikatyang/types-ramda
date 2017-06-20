import {Reduced} from 'ramda/src/$types';
import * as R_reduced from 'ramda/src/reduced';

declare const object: object;
declare const reduced_object: Reduced<object>;

// @dts-jest:pass
R_reduced(object);
// @dts-jest:pass
R_reduced(reduced_object);
