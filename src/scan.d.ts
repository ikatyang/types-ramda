import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const scan: scan_000;
type scan_000 = {
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_100<T, U>;
    <U>(_fn: PH, initial: U): scan_010<U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): scan_110<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): scan_001<T>;
    <T, U>(_fn: PH, initial: U, values: List<T>): scan_011<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): scan_101<T, U>;
    <$SEL extends "1">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_100<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => scan_010<U>;
    <$SEL extends "11">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => scan_110<T, U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, values: List<T>) => scan_001<T>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, values: List<T>) => scan_011<T, U>;
    <$SEL extends "101">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>) => scan_101<T, U>;
    <$SEL extends "111">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => scan_111<U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): scan_111<U>;
};
type scan_100<T, U> = {
    (initial: U): scan_110<T, U>;
    (_initial: PH, values: List<T>): scan_101<T, U>;
    <$SEL extends "1">(): (initial: U) => scan_110<T, U>;
    <$SEL extends "01">(): (_initial: PH, values: List<T>) => scan_101<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => scan_111<U>;
    (initial: U, values: List<T>): scan_111<U>;
};
type scan_010<U> = {
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_110<T, U>;
    <T>(_fn: PH, values: List<T>): scan_011<T, U>;
    <$SEL extends "1">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_110<T, U>;
    <$SEL extends "01">(): <T>(_fn: PH, values: List<T>) => scan_011<T, U>;
    <$SEL extends "11">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => scan_111<U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): scan_111<U>;
};
type scan_110<T, U> = {
    (values: List<T>): scan_111<U>;
};
type scan_001<T> = {
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_101<T, U>;
    <U>(_fn: PH, initial: U): scan_011<T, U>;
    <$SEL extends "1">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_101<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => scan_011<T, U>;
    <$SEL extends "11">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => scan_111<U>;
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
