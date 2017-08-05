import { Ordered } from "./$types";
declare const lte: lte_00;
type lte_00 = {
    <T extends Ordered>(a: T): lte_10<T>;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => lte_10<T>;
    <$SEL extends "11">(): <T extends Ordered>(a: T, b: T) => lte_11;
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
