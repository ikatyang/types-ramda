import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const prepend: prepend_00;
type prepend_00 = {
    <T>(value: T): prepend_10<T>;
    <U>(_value: PH, list: List<U>): prepend_01<U>;
    <T, U>(value: T, list: List<U>): prepend_11<T, U>;
};
type prepend_10<T> = {
    <U>(list: List<U>): prepend_11<T, U>;
};
type prepend_01<U> = {
    <T>(value: T): prepend_11<T, U>;
};
type prepend_11<T, U> = (T | U)[];
export = prepend;
