import { Placeholder as PH } from "./$placeholder";
declare const and: and_00;
type and_00 = {
    <T>(a: T): and_10<T>;
    <U>(_a: PH, b: U): and_01<U>;
    <$SEL extends "1">(): <T>(a: T) => and_10<T>;
    <$SEL extends "01">(): <U>(_a: PH, b: U) => and_01<U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => and_11<T, U>;
    <T, U>(a: T, b: U): and_11<T, U>;
};
type and_10<T> = {
    <U>(b: U): and_11<T, U>;
};
type and_01<U> = {
    <T>(a: T): and_11<T, U>;
};
type and_11<T, U> = T | U;
export = and;
