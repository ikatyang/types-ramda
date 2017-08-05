import { Tap } from "./$types";
declare const tap: tap_00;
type tap_00 = {
    <T>(fn: Tap<T>): tap_10<T>;
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
