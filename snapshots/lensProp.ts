import { Property } from '../ramda/dist/src/$types';
import * as R_lensProp from '../ramda/dist/src/lensProp';

declare const property: Property;

// @dts-jest:pass -> Lens<{}, {}>
R_lensProp(property);
// @dts-jest:pass -> Lens<number, object>
R_lensProp<number, object>(property);
