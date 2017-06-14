import {Morphism, Ordered} from 'ramda/src/$types';
import * as R_ascend from 'ramda/src/ascend';

declare const get_order_from_object: Morphism<object, string>;
declare const object_a: object;
declare const object_b: object;

// @dts-jest
R_ascend(get_order_from_object)(object_a)(object_b);
// @dts-jest
R_ascend(get_order_from_object, object_a)(object_b);
// @dts-jest
R_ascend(get_order_from_object, object_a, object_b);
