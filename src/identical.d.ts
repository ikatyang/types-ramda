import { Placeholder as PH } from "./$placeholder";
declare const identical: identical_00;
type identical_00 = {
    <T>(a: T): identical_10<T>;
    <T>(_a: PH, b: T): identical_01<T>;
    <$SEL extends "1">(): <T>(a: T) => identical_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: T) => identical_01<T>;
    <$SEL extends "11">(): <T>(a: T, b: T) => identical_11;
    <T>(a: T, b: T): identical_11;
};
type identical_10<T> = {
    (b: T): identical_11;
};
type identical_01<T> = {
    (a: T): identical_11;
};
type identical_11 = boolean;
export = identical;
