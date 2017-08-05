import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const lt: lt_00;
type lt_00 = {
    <T extends Ordered>(a: T): lt_10<T>;
    <T extends Ordered>(_a: PH, b: T): lt_01<T>;
    <T extends Ordered>(a: T, b: T): lt_11;
};
type lt_10<T extends Ordered> = {
    (b: T): lt_11;
};
type lt_01<T extends Ordered> = {
    (a: T): lt_11;
};
type lt_11 = boolean;
export = lt;
