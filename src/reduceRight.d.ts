import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const reduceRight: reduceRight_000;
type reduceRight_000 = {
    <T, U>(fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_100<T, U>;
    <U>(_fn: PH, initial: U): reduceRight_010<U>;
    <T, U>(fn: (value: T, accumulator: U) => Reduced<U> | U, initial: U): reduceRight_110<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): reduceRight_001<T>;
    <T, U>(_fn: PH, initial: U, values: List<T>): reduceRight_011<T, U>;
    <T, U>(fn: (value: T, accumulator: U) => Reduced<U> | U, _initial: PH, values: List<T>): reduceRight_101<T, U>;
    <T, U>(fn: (value: T, accumulator: U) => Reduced<U> | U, initial: U, values: List<T>): reduceRight_111<U>;
};
type reduceRight_100<T, U> = {
    (initial: U): reduceRight_110<T, U>;
    (_initial: PH, values: List<T>): reduceRight_101<T, U>;
    (initial: U, values: List<T>): reduceRight_111<U>;
};
type reduceRight_010<U> = {
    <T>(fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_110<T, U>;
    <T>(_fn: PH, values: List<T>): reduceRight_011<T, U>;
    <T>(fn: (value: T, accumulator: U) => Reduced<U> | U, values: List<T>): reduceRight_111<U>;
};
type reduceRight_110<T, U> = {
    (values: List<T>): reduceRight_111<U>;
};
type reduceRight_001<T> = {
    <U>(fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_101<T, U>;
    <U>(_fn: PH, initial: U): reduceRight_011<T, U>;
    <U>(fn: (value: T, accumulator: U) => Reduced<U> | U, initial: U): reduceRight_111<U>;
};
type reduceRight_101<T, U> = {
    (initial: U): reduceRight_111<U>;
};
type reduceRight_011<T, U> = {
    (fn: (value: T, accumulator: U) => Reduced<U> | U): reduceRight_111<U>;
};
type reduceRight_111<U> = U;
export = reduceRight;
