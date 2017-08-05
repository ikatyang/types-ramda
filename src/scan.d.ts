import { List, Reduced } from "./$types";
declare const scan: scan_000;
type scan_000 = {
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_100<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): scan_110<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): scan_111<U>;
};
type scan_100<T, U> = {
    (initial: U): scan_110<T, U>;
    (initial: U, values: List<T>): scan_111<U>;
};
type scan_010<U> = {
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_110<T, U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): scan_111<U>;
};
type scan_110<T, U> = {
    (values: List<T>): scan_111<U>;
};
type scan_001<T> = {
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_101<T, U>;
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): scan_111<U>;
};
type scan_101<T, U> = {
    (initial: U): scan_111<U>;
};
type scan_011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): scan_111<U>;
};
type scan_111<U> = U[];
export = scan;
