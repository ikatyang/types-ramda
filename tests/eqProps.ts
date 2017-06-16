import {Property} from 'ramda/src/$types';
import * as R_eqProps from 'ramda/src/eqProps';

declare const property: Property;
declare const string: string;

// @dts-jest
R_eqProps(property, string);
// @dts-jest
R_eqProps(property)(string, string);
// @dts-jest
R_eqProps(property, string, string);
