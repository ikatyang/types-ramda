import { Tap } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const tap: tap_00;
type tap_00 = {
    <T>(fn: Tap<T>): tap_10<T>;
    <T>(_fn: PH, value: T): tap_01<T>;
    <$SEL extends "1">(): <T>(fn: Tap<T>) => tap_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, value: T) => tap_01<T>;
    <$SEL extends "11">(): <T>(fn: Tap<T>, value: T) => tap_11<T>;
    <T>(fn: Tap<T>, value: T): tap_11<T>;
};
type tap_10<T> = {
    (value: T): tap_11<T>;
};
type tap_01<T> = {
    (fn: Tap<T>): tap_11<T>;
};
type tap_11<T> = T;
export = tap;
