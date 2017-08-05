import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const lte: lte_00;
type lte_00 = {
    <T extends Ordered>(a: T): lte_10<T>;
    <T extends Ordered>(_a: PH, b: T): lte_01<T>;
    <T extends Ordered>(a: T, b: T): lte_11;
};
type lte_10<T extends Ordered> = {
    (b: T): lte_11;
};
type lte_01<T extends Ordered> = {
    (a: T): lte_11;
};
type lte_11 = boolean;
export = lte;
