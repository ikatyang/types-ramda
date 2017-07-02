import {Morphism} from '../ramda/dist/src/$types';
import * as R_countBy from '../ramda/dist/src/countBy';

declare const object_to_string: Morphism<object, string>;
declare const object_array: object[];

// @dts-jest:pass -> <T$1 extends object = object>(list: T$1[] | ArrayLike<T$1>) => Dictionary<number>
R_countBy(object_to_string);
// @dts-jest:pass -> Dictionary<number>
R_countBy(object_to_string, object_array);
