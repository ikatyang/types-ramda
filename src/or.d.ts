import { Placeholder as PH } from "./$placeholder";
declare const or: or_00;
type or_00 = {
    <T>(a: T): or_10<T>;
    <U>(_a: PH, b: U): or_01<U>;
    <$SEL extends "1">(): <T>(a: T) => or_10<T>;
    <$SEL extends "01">(): <U>(_a: PH, b: U) => or_01<U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => or_11<T, U>;
    <T, U>(a: T, b: U): or_11<T, U>;
};
type or_10<T> = {
    <U>(b: U): or_11<T, U>;
};
type or_01<U> = {
    <T>(a: T): or_11<T, U>;
};
type or_11<T, U> = T | U;
export = or;
