import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const difference: difference_00;
type difference_00 = {
    <T>(a: List<T>): difference_10<T>;
    <T>(_a: PH, b: List<T>): difference_01<T>;
    <T>(a: List<T>, b: List<T>): difference_11<T>;
};
type difference_10<T> = {
    (b: List<T>): difference_11<T>;
};
type difference_01<T> = {
    (a: List<T>): difference_11<T>;
};
type difference_11<T> = T[];
export = difference;
