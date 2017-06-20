import {Property} from 'ramda/src/$types';
import * as R_hasIn from 'ramda/src/hasIn';

declare const property: Property;
declare const object: object;

// @dts-jest:pass
R_hasIn(property);
// @dts-jest:pass
R_hasIn(property)(object);
// @dts-jest:pass
R_hasIn(property, object);
