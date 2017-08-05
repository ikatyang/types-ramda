import { Placeholder as PH } from "./$placeholder";
declare const equals: equals_00;
type equals_00 = {
    <T>(a: T): equals_10<T>;
    <T>(_a: PH, b: T): equals_01<T>;
    <$SEL extends "1">(): <T>(a: T) => equals_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: T) => equals_01<T>;
    <$SEL extends "11">(): <T>(a: T, b: T) => equals_11;
    <T>(a: T, b: T): equals_11;
};
type equals_10<T> = {
    (b: T): equals_11;
};
type equals_01<T> = {
    (a: T): equals_11;
};
type equals_11 = boolean;
export = equals;
