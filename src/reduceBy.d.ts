import { List, Morphism, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const reduceBy: reduceBy_0000;
type reduceBy_0000 = {
    <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1000<T, U>;
    <U>(_valueFn: PH, initial: U): reduceBy_0100<U>;
    <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1100<T, U>;
    <T, K extends string>(_valueFn: PH, _initial: PH, keyFn: Morphism<T, K>): reduceBy_0010<T, K>;
    <T, U, K extends string>(_valueFn: PH, initial: U, keyFn: Morphism<T, K>): reduceBy_0110<T, U, K>;
    <T, U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T, K>): reduceBy_1010<T, U, K>;
    <T, U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    <T>(_valueFn: PH, _initial: PH, _keyFn: PH, values: List<T>): reduceBy_0001<T>;
    <T, K extends string>(_valueFn: PH, _initial: PH, keyFn: Morphism<T, K>, values: List<T>): reduceBy_0011<T, K>;
    <T, U>(_valueFn: PH, initial: U, _keyFn: PH, values: List<T>): reduceBy_0101<T, U>;
    <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, _keyFn: PH, values: List<T>): reduceBy_1001<T, U>;
    <T, U, K extends string>(_valueFn: PH, initial: U, keyFn: Morphism<T, K>, values: List<T>): reduceBy_0111<T, U, K>;
    <T, U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1011<T, U, K>;
    <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, _keyFn: PH, values: List<T>): reduceBy_1101<T, U>;
    <T, U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1000<T, U> = {
    (initial: U): reduceBy_1100<T, U>;
    <K extends string>(_initial: PH, keyFn: Morphism<T, K>): reduceBy_1010<T, U, K>;
    <K extends string>(initial: U, keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    (_initial: PH, _keyFn: PH, values: List<T>): reduceBy_1001<T, U>;
    <K extends string>(_initial: PH, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1011<T, U, K>;
    (initial: U, _keyFn: PH, values: List<T>): reduceBy_1101<T, U>;
    <K extends string>(initial: U, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0100<U> = {
    <T>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1100<T, U>;
    <T, K extends string>(_valueFn: PH, keyFn: Morphism<T, K>): reduceBy_0110<T, U, K>;
    <T, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    <T>(_valueFn: PH, _keyFn: PH, values: List<T>): reduceBy_0101<T, U>;
    <T, K extends string>(_valueFn: PH, keyFn: Morphism<T, K>, values: List<T>): reduceBy_0111<T, U, K>;
    <T>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _keyFn: PH, values: List<T>): reduceBy_1101<T, U>;
    <T, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1100<T, U> = {
    <K extends string>(keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    (_keyFn: PH, values: List<T>): reduceBy_1101<T, U>;
    <K extends string>(keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0010<T, K extends string> = {
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1010<T, U, K>;
    <U>(_valueFn: PH, initial: U): reduceBy_0110<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1110<T, U, K>;
    (_valueFn: PH, _initial: PH, values: List<T>): reduceBy_0011<T, K>;
    <U>(_valueFn: PH, initial: U, values: List<T>): reduceBy_0111<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduceBy_1011<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1010<T, U, K extends string> = {
    (initial: U): reduceBy_1110<T, U, K>;
    (_initial: PH, values: List<T>): reduceBy_1011<T, U, K>;
    (initial: U, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0110<T, U, K extends string> = {
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1110<T, U, K>;
    (_valueFn: PH, values: List<T>): reduceBy_0111<T, U, K>;
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1110<T, U, K extends string> = {
    (values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0001<T> = {
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1001<T, U>;
    <U>(_valueFn: PH, initial: U): reduceBy_0101<T, U>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1101<T, U>;
    <K extends string>(_valueFn: PH, _initial: PH, keyFn: Morphism<T, K>): reduceBy_0011<T, K>;
    <U, K extends string>(_valueFn: PH, initial: U, keyFn: Morphism<T, K>): reduceBy_0111<T, U, K>;
    <U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T, K>): reduceBy_1011<T, U, K>;
    <U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_1001<T, U> = {
    (initial: U): reduceBy_1101<T, U>;
    <K extends string>(_initial: PH, keyFn: Morphism<T, K>): reduceBy_1011<T, U, K>;
    <K extends string>(initial: U, keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_0101<T, U> = {
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1101<T, U>;
    <K extends string>(_valueFn: PH, keyFn: Morphism<T, K>): reduceBy_0111<T, U, K>;
    <K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_1101<T, U> = {
    <K extends string>(keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_0011<T, K extends string> = {
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1011<T, U, K>;
    <U>(_valueFn: PH, initial: U): reduceBy_0111<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1111<U, K>;
};
type reduceBy_1011<T, U, K extends string> = {
    (initial: U): reduceBy_1111<U, K>;
};
type reduceBy_0111<T, U, K extends string> = {
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1111<U, K>;
};
type reduceBy_1111<U, K extends string> = Partial<Record<K, U>>;
export = reduceBy;
