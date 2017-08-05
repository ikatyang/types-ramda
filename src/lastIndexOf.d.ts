import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const lastIndexOf: lastIndexOf_00;
type lastIndexOf_00 = {
    <T>(target: T): lastIndexOf_10<T>;
    <T>(_target: PH, list: List<T>): lastIndexOf_01<T>;
    <$SEL extends "1">(): <T>(target: T) => lastIndexOf_10<T>;
    <$SEL extends "01">(): <T>(_target: PH, list: List<T>) => lastIndexOf_01<T>;
    <$SEL extends "11">(): <T>(target: T, list: List<T>) => lastIndexOf_11;
    <T>(target: T, list: List<T>): lastIndexOf_11;
};
type lastIndexOf_10<T> = {
    (list: List<T>): lastIndexOf_11;
};
type lastIndexOf_01<T> = {
    (target: T): lastIndexOf_11;
};
type lastIndexOf_11 = number;
export = lastIndexOf;
