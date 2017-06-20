import {Property} from 'ramda/src/$types';
import * as R_lensProp from 'ramda/src/lensProp';

declare const property: Property;

// @dts-jest:pass
R_lensProp(property);
// @dts-jest:pass
R_lensProp<number, object>(property);
