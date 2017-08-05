import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const min: min_00;
type min_00 = {
    <T extends Ordered>(a: T): min_10<T>;
    <T extends Ordered>(_a: PH, b: T): min_01<T>;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => min_10<T>;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => min_01<T>;
    <$SEL extends "11">(): <T extends Ordered>(a: T, b: T) => min_11<T>;
    <T extends Ordered>(a: T, b: T): min_11<T>;
};
type min_10<T extends Ordered> = {
    (b: T): min_11<T>;
};
type min_01<T extends Ordered> = {
    (a: T): min_11<T>;
};
type min_11<T extends Ordered> = T;
export = min;
