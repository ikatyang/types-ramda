import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const zipObj: zipObj_00;
type zipObj_00 = {
    <T extends string>(a: List<T>): zipObj_string_10<T>;
    (a: List<Property>): zipObj_general_10;
    <U>(_a: PH, b: List<U>): zipObj_01<U>;
    <T extends string, U>(a: List<T>, b: List<U>): zipObj_string_11<T, U>;
    <$SEL extends "1", $KIND extends "string">(): <T extends string>(a: List<T>) => zipObj_string_10<T>;
    <$SEL extends "1", $KIND extends "general">(): (a: List<Property>) => zipObj_general_10;
    <$SEL extends "01">(): <U>(_a: PH, b: List<U>) => zipObj_01<U>;
    <$SEL extends "11", $KIND extends "string">(): <T extends string, U>(a: List<T>, b: List<U>) => zipObj_string_11<T, U>;
    <$SEL extends "11", $KIND extends "general">(): <U>(a: List<Property>, b: List<U>) => zipObj_general_11<U>;
    <U>(a: List<Property>, b: List<U>): zipObj_general_11<U>;
};
type zipObj_01<U> = {
    <T extends string>(a: List<T>): zipObj_string_11<T, U>;
    <$SEL extends "1", $KIND extends "string">(): <T extends string>(a: List<T>) => zipObj_string_11<T, U>;
    <$SEL extends "1", $KIND extends "general">(): (a: List<Property>) => zipObj_general_11<U>;
    (a: List<Property>): zipObj_general_11<U>;
};
type zipObj_string_10<T extends string> = {
    <U>(b: List<U>): zipObj_string_11<T, U>;
};
type zipObj_general_10 = {
    <U>(b: List<U>): zipObj_general_11<U>;
};
type zipObj_string_11<T extends string, U> = Record<T, U>;
type zipObj_general_11<U> = Record<string, U>;
export = zipObj;
