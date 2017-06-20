import {Placeholder} from 'ramda/src/$placeholder';
import * as R_pluck from 'ramda/src/pluck';

declare const placeholder: Placeholder;
declare const a_number_record: Record<'a', number>;

// @dts-jest:pass
R_pluck('a');
// @dts-jest:pass
R_pluck('a')([a_number_record, a_number_record]);

// @dts-jest:pass
R_pluck('a', [a_number_record, a_number_record]);

// @dts-jest:pass
R_pluck(placeholder, [a_number_record, a_number_record]);
// @dts-jest:pass
R_pluck(placeholder, [a_number_record, a_number_record])('a');
