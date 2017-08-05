import { Ordered } from "./$types";
declare const gte: gte_00;
type gte_00 = {
    <T extends Ordered>(a: T): gte_10<T>;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => gte_10<T>;
    <$SEL extends "11">(): <T extends Ordered>(a: T, b: T) => gte_11;
    <T extends Ordered>(a: T, b: T): gte_11;
};
type gte_10<T extends Ordered> = {
    (b: T): gte_11;
};
type gte_01<T extends Ordered> = {
    (a: T): gte_11;
};
type gte_11 = boolean;
export = gte;
