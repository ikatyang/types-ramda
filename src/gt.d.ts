import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const gt: gt_00;
type gt_00 = {
    <T extends Ordered>(a: T): gt_10<T>;
    <T extends Ordered>(_a: PH, b: T): gt_01<T>;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => gt_10<T>;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => gt_01<T>;
    <$SEL extends "11">(): <T extends Ordered>(a: T, b: T) => gt_11;
    <T extends Ordered>(a: T, b: T): gt_11;
};
type gt_10<T extends Ordered> = {
    (b: T): gt_11;
};
type gt_01<T extends Ordered> = {
    (a: T): gt_11;
};
type gt_11 = boolean;
export = gt;
