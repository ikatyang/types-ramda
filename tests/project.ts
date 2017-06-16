import {Placeholder} from 'ramda/src/$placeholder';
import * as R_project from 'ramda/src/project';

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest
R_project(['a']);
// @dts-jest
R_project(['a'])([a_b_number_record, a_b_number_record]);

// @dts-jest
R_project(['a'], [a_b_number_record, a_b_number_record]);

// @dts-jest
R_project(placeholder, [a_b_number_record, a_b_number_record]);
// @dts-jest
R_project(placeholder, [a_b_number_record, a_b_number_record])(['a']);
