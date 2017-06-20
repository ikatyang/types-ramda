import {Property} from 'ramda/src/$types';
import * as R_has from 'ramda/src/has';

declare const property: Property;
declare const object: object;

// @dts-jest:pass
R_has(property);
// @dts-jest:pass
R_has(property)(object);
// @dts-jest:pass
R_has(property, object);
