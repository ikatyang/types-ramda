import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const omit: omit_00;
type omit_00 = {
    (keys: List<Property>): omit_10;
    <T>(_keys: PH, object: T): omit_01<T>;
    <T>(keys: List<Property>, object: T): omit_11<T>;
};
type omit_10 = {
    <T>(object: T): omit_11<T>;
};
type omit_01<T> = {
    (keys: List<Property>): omit_11<T>;
};
type omit_11<T> = Partial<T>;
export = omit;
